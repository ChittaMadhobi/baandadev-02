const User = require('../../models/common/User');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const keys = require('../../config/keys');
const BaandaID = require('../../models/common/BaandaID');

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/api/users/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      // console.log('accessToken:' + accessToken);
      // console.log('profile :' + JSON.stringify(profile));
      if (!accessToken || !profile) {
        // Not authorized - send back error
        console.log('Error: null google token - not authenticated');
        const err = { error: 'null google token - not authenticated' };
        const payload = null;
        done(err, payload);
      }
      User.findOne({ oauthId: profile.id })
        .then(user => {
          if (user) {
            // Create payload
            const payload = {
              id: user.id,
              name: user.name,
              baandaid: user.baandaid,
              avatar: user.avatar,
              registrationType: user.registrationType
            };
            const err = null;
            done(err, payload);
            // Return name, baandaid, avatar, mongodb's user.id
          } else {
            // Get next BaandaID
            BaandaID.findOneAndUpdate({
              ref: 'baanda-id-ref',
              $inc: {
                newBaandaID: 1
              }
            })
              .then(resp => {
                // Insert a new User document with the next Baanda ID
                let dateNow = new Date();
                const newUser = new User({
                  baandaid: resp.newBaandaID,
                  name: profile.displayName,
                  email: profile.emails[0].value,
                  oauthId: profile.id,
                  avatar: profile.photos[0].value,
                  password: 'none',
                  confirmCode: 0,
                  registrationType: 'oauth-google',
                  confirmBy: dateNow,
                  isConfirmed: true
                });
                newUser
                  .save()
                  .then(usern => {
                    // Create payload
                    const payload = {
                      id: usern.id,
                      name: usern.name,
                      baandaid: usern.baandaid,
                      avatar: usern.avatar,
                      registrationType: usern.registrationType
                    };
                    const err = null;
                    done(err, payload);
                  })
                  .catch(error => {
                    console.log(
                      'Error: failed to save new user in User DB -newUser: ' +
                        error +
                        '| newUser:' +
                        newUser
                    );
                    const err = {
                      error:
                        'failed to save new user in User DB newUser. email:' +
                        newUser.email
                    };
                    const payload = null;
                    done(err, payload);
                  });
              })
              .catch(error => {
                console.log(
                  'Error: failed to get a new next BaandaID - :' + error
                );
                const err = { error: 'failed to get a new next BaandaID' };
                const payload = null;
                done(err, payload);
              });
          }
        })
        .catch(error => {
          console.log(
            'Error: failed to execute findOne :' +
              error +
              ' | google profile id:' +
              profile.id
          );
          const err = { error: 'failed to execute findOne' };
          const payload = null;
          done(err, payload);
        });
    }
  )
);
