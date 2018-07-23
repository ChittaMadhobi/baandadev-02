const express = require('express');
const router = express.Router();
const passport = require('passport');

const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    console.log('Got here ... before jwt tokenization');
    if (!req.err) {
      //console.log('error not returned ,,,: ' + req.user);
      const payload = {
        baandaid: req.user.baandaid,
        name: req.user.name,
        email: req.user.email,
        avatar: req.user.avatar
      };

      console.log('payload:' + payload);
      jwt.sign(
        payload,
        keys.secretOrKey,
        { expiresIn: 86400 },
        (err, token) => {
          if (!err) {
            console.log('token: ' + 'Bearer ' + token);
            res.json({
              success: true,
              token: 'Bearer ' + token
            });
          } else {
            console.log('error while jwt tokenizing: ' + err);
          }
        }
      );
    } else {
      console.log('error req.err:' + req.err);
      res.status(400).json(req.err);
    }

    //    res.redirect('/lobby');
  }
);

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/dashboard');
  }
);

module.exports = router;
