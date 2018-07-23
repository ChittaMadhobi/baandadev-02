//const GoogleStrategy = require('passport-google-oauth20').Strategy;

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const mongoose = require('mongoose');
const keys = require('./keys');
// Load user model
const User = mongoose.model('users');

//const User = require('../models/common/User');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  // jwt local strategy
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log('passport error: ' + err));
      //console.log('jwt_payload regular:' + jwt_payload);
    })
  );

  // Google oauth strategy
  // passport.use(
  //   new GoogleStrategy(
  //     {
  //       clientID: keys.googleClientID,
  //       clientSecret: keys.googleClientSecret,
  //       callbackURL: '/auth/google/callback',
  //       proxy: true
  //     },
  //     (accessToken, refreshToken, profile, done) => {
  //       //console.log('accessToken:' + accessToken);
  //       //console.log('profile :' + JSON.stringify(profile));
  //       const image = profile.photos[0].value.substring(
  //         0,
  //         profile.photos[0].value.indexOf('?')
  //       );

  //       User.findOne({ googleID: profile.id })
  //         .then(user => {
  //           if (user) {
  //             console.log('user exists');
  //             done(null, user);
  //           } else {
  //             BaandaID.findOneAndUpdate({
  //               ref: 'baanda-id-ref',
  //               $inc: { newBaandaID: 1 }
  //             });
  //             then(resp => {
  //               let dateNow = new Date();
  //               const newUser = new User({
  //                 baandaid: resp.newBaandaID,
  //                 oauthId: profile.id,
  //                 name: profile.displayName,
  //                 email: profile.emails[0].value,
  //                 avatar: image,
  //                 registrationType: 'google-oauth',
  //                 isConfirmed: true,
  //                 confirmBy: dateNow
  //               });
  //               newUser
  //                 .save()
  //                 .then(user => {
  //                   console.log('new user saved - google:' + user);
  //                   done(null, user); // err = null
  //                 })
  //                 .catch(err => {
  //                   console.log('failed to save newUser - should not happen');
  //                   done(err, null); // send the error back with null user
  //                 });
  //             }).catch(err => {
  //               console.log('Failed to get next BaandaId'); // Should not happen
  //               done(err, null);
  //             });
  //           }
  //         })
  //         .catch(err => {
  //           console.log('Error to findOne:' + err);
  //           done(err, null); // Again, should not happen
  //         });
  //     }
  //   )
  // );

  // passport.serializeUser((user, done) => {
  //   done(null, user.id);
  // });

  // passport.deserializeUser((id, done) => {
  //   User.findById(id).then(user => done(null, user));
  // });
};
