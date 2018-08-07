const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs'); // For encrypting password
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport'); // Required for protected routes
//const sync = require('synchronize');

// Load Input Validation
const validateRegisterInput = require('../../validation/common/register');
const validateLoginInput = require('../../validation/common/login');

//const nodemailer = require('nodemailer');
const confirmMail = require('../../utils/confirmEmail');

// Load user model
const User = require('../../models/common/User');
const BaandaID = require('../../models/common/BaandaID');

// @route   POST api/users/login
// @desc    Login user & return JWT Token
// @access  Public
router.post('/login', (req, res) => {
  //console.log('Got to POST login req:' + JSON.stringify(req.body));
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validations
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find the user by email
  User.findOne({ email })
    .then(user => {
      if (!user) {
        errors.email = 'User not found';
        return res.status(404).json(errors);
      }
      if (user.isConfirmed) {
        // Check password
        bcrypt
          .compare(password, user.password)
          .then(isMatch => {
            if (isMatch) {
              if (user.baandaid != 0) {
                //console.log('resp - usr WITH Baandaid:' + user.baandaid);
                // create jwt and return
                const payload = {
                  id: user.id,
                  name: user.name,
                  baandaid: user.baandaid,
                  avatar: user.avatar
                };
                jwt.sign(
                  payload,
                  keys.secretOrKey,
                  { expiresIn: 86400 },
                  (err, token) => {
                    res.json({
                      success: true,
                      token: 'Bearer ' + token
                    });
                  }
                );
              } else {
                BaandaID.findOneAndUpdate({
                  ref: 'baanda-id-ref',
                  $inc: {
                    newBaandaID: 1
                  }
                })
                  .then(resp => {
                    User.findOneAndUpdate(
                      { email: email },
                      { baandaid: resp.newBaandaID }
                    )
                      .then(result => {
                        //console.log('inside findoneandupdate : ' + result);
                        const payload = {
                          id: user.id,
                          name: user.name,
                          baandaid: result.BaandaID,
                          avatar: user.avatar
                        };
                        jwt.sign(
                          payload,
                          keys.secretOrKey,
                          { expiresIn: 86400 },
                          (err, token) => {
                            res.json({
                              success: true,
                              token: 'Bearer ' + token
                            });
                          }
                        );
                      })
                      .catch(err =>
                        console.log(
                          'failed to update baanda in in User email: ' + email
                        )
                      );
                  })
                  .catch(error => {
                    console.log('Error in findupdate: ' + error);
                    newid = 1;
                  });
              }
            } else {
              errors.password = 'Password incorrect';
              return res.status(400).json(errors);
            }
          })
          .catch();
      } else {
        console.log('Please confirm your email: ' + email);
        errors.emailConfirm =
          'Please confirm your email. Check your email box.';
        return res.status(400).json(errors);
      }
    })
    .catch();
});

// @route   GET api/users/register
// @desc    Register user
// @access  Public
router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validations
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = 'Email already exists';
      return res.status(400).json(errors);
    } else {
      const avatargen = gravatar.url(req.body.email, {
        s: '200', //size
        r: 'pg', // Rating ..
        d: 'mm' // Defaults to empty face icon
      });

      let rand = Math.floor(Math.random() * 1000);
      let date = new Date();
      let confirmby = date.setDate(date.getDate() + 10); //Conform by 10 days. This needs to be in config file

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar: avatargen,
        password: req.body.password,
        confirmCode: rand,
        confirmBy: confirmby
      });
      // This is used to create a hash of the password before storing.
      bcrypt.genSalt(10, (err, salt) => {
        if (err) throw err; // Error while generating salt
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err; // Error while generating hash
          newUser.password = hash;
          // save it in DB
          newUser
            .save()
            .then(user => {
              if (confirmMail(req, rand)) {
                // good
                res.json({
                  user: user,
                  message: 'Please confirm email within ten days from now.'
                });
              } else {
                console.log(
                  'confirm email-send failed ... for email = ' + req.body.email
                );
              }
            })
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route   GET api/users/verify
// @desc    Register user
// @access  Public
router.get('/verify', (req, res) => {
  let emailIn = req.query.email;
  let confirmCodeIn = req.query.id;
  console.log(
    'Return from confirm click. id = ' + confirmCodeIn + ' email: ' + emailIn
  );
  // const targetURL = req.protocol + '://' + req.get('host') + '/login';
  // res.send(targetURL);
  // This needs to be in place and tested in heroku ************************
  const targetURL = 'http://localhost:3000/login'; // For  Dev
  //const targetURL = 'https://baandadev-02.herokuapp.com/login'; //For Heroku

  User.findOne({ email: emailIn })
    .then(user => {
      // console.log('user:' + JSON.stringify(user));
      let msg = '';
      // The following should not happen unless someone filldes with DB directly and delete user.
      if (!user) {
        console.log(
          'The user is not registerd yet. Please register and then click the latest confirmation email sent.'
        );
        res.redirect(targetURL);
        return -1;
      }

      if (!user.isConfirmed) {
        if (user.confirmCode == confirmCodeIn) {
          //console.log('confirm code matched : ' + confirmCodeIn);
          if (user.confirmBy > Date.now()) {
            User.findOneAndUpdate({ email: emailIn }, { isConfirmed: true })
              .then(user => {
                //console.log('updated confirmed successfully');
                res.redirect(targetURL);
              })
              .catch(err => console.log('update error'));
          } else {
            msg =
              'Confirmaton time has elasped. You can request for  re-confirmation.';
            console.log('msg : ' + msg + ' user.confirmBy:' + user.confirmBy);
          }
        } else {
          msg = 'Your confirmation code  has been tampered';
          console.log(
            'msg : ' +
              msg +
              ' user.confirmCode:' +
              user.confirmCode +
              ' confirmCodeIn:' +
              confirmCodeIn
          );
        }
      } else {
        msg = 'You are already confirmed';
        console.log('msg : ' + msg);
        res.redirect(targetURL);
      }
    })
    .catch(err => console.log('error in verify findOne :' + err));
});

// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
      avatar: req.user.avatar,
      isConfirmed: req.user.isConfirmed,
      isActive: req.user.isActive
    });
    //res.json(req.user);
    //res.json({ msg: 'success' });
  }
);

module.exports = router;
