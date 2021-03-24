const passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
// var GoogleStrategy = require('passport-google-oauth20').Strategy;
// const googleClient = require('../googleClient');

var db = require("../models");

// Google auth
// passport.use(new GoogleStrategy({
//   clientID: googleClient.web.client_id,
//   clientSecret: googleClient.web.client_secret,
//   callbackURL: "/api/user/auth/google/callback"
//   },
//   function(token, tokenSecret, profile, done) {
//     User.findOne({ googleId: profile.id }, function (err, user) {
//       return done(err, user);
//     });
//   }
// ));

// app.get('/auth/google',
//   passport.authenticate('google', { scope: ['profiles', ['email']] }));

//   app.get('/auth/google/callback',
//     passport.authenticate('google', { failureRedirect: '/login' }),
//     function(req, res) {
//       res.redirect('/');
//     });

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(new LocalStrategy(
  // Our user will sign in using an email, rather than a "username"
  {
    usernameField: "email"
  },
  function(email, password, done) {
    // When a user tries to sign in this code runs
    db.User.findOne({
        email: email
    }).then(function(dbUser) {
      // If there's no user with the given email
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect email."
        });
      }
      // If there is a user with the given email, but the password the user gives us is incorrect
      else if (!dbUser.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // If none of the above, return the user
      return done(null, dbUser);
    });
  }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;

