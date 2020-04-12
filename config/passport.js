const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const config = require("./config");
const User = require("../models/User");
const bcrypt = require("bcrypt");

// user.id is the shortcut to the auto generated mongodb _id
// The reason why we use mongodb _id is because we might use facebook, github, twitter strategies
passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  console.log("deserialize");
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: config.google_id,
      clientSecret: config.google_client_secret,
      callbackURL: "/auth/google/callback"
      
    },
    async (accessToken, refreshToken, profile, done) => {
      //Save to database
      
      try {
        // Search database to see if user exists
        const existingUser = await User.findOne({ googleId: profile.id });
        if (existingUser) {
          console.log(`User already exists in database`);
          // User already exists no need to save to database
          done(null, existingUser);
        } else {
          // Save new user to database
          console.log(`Save Record: ${profile.id} ${profile.displayName} ${profile.emails[0].value}`);
            
          try {
            const user = await User.create({
              googleId: profile.id,
              name: profile.displayName,
              email: profile.emails[0].value
            });
            
            done(null, user);
          } catch (err) {
            console.log("error " + err);
            
          }
        }
      } catch (err) {
        console.log("bad error " + err);
      } 
    }
  )
);

passport.use( new LocalStrategy( { usernameField: "email" }, (email, password, done) => {
    // Search for user
    User.findOne( { email: email})
    .then( user => {
      if(!user){
        return done(null, false, { message: "User is not registered!"});
      }
      // Match password
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if(err) throw err;
        if(isMatch){
          return done(null, user);
        } else {
          return done(null, false, { message: "Password is incorrect!"});
        }
      });
    })
    .catch( err => {
      console.log(`Error: ${err}`);
    })
}) );

