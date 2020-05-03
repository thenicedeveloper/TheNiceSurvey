const passport = require("passport");
const mongoose = require("mongoose");
const config = require("../config/config");
const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = (app) => {
  // The googlestrategy looks for the "google" string
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  // The "google" identifies google to use the googlestrategy
  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      // res.send(req.user);
      console.log(`Login ${JSON.stringify(req.user)}`);
      res.redirect("/main");
    }
  );

  app.get("/api/logout", (req, res) => {
    // console.log("In logout")
    req.logout();
    res.send(req.user);
    //res.redirect("/home");
  });

  app.get("/api/current_user", (req, res, next) => {
    res.send(req.user);
  });

  // Register first time user
  app.post("/api/register", (req, res) => {
    const { name, email, password, password2 } = req.body;
    console.log(`User data => ${name}, ${email}, ${password} and ${password2}`);

    // Check required field and send back any errors
    let errors = [];
    if (!name || !email || !password || !password2) {
      errors.push({ msg: "Please fill in all fields!" });
    }
    //Check passwords match
    if (password !== password2) {
      errors.push({ msg: "Passwords do not match!" });
    }
    //Check password length
    if (password.length < 8) {
      errors.push({ msg: "Password must be at least 8 characters long!" });
    }

    if (errors.length > 0) {
      res.send("Failed: " + errors[0]);
    } else {
      // Check if user already exists
      User.findOne({ email: email }).then((user) => {
        if (user) {
          // User exists
          console.log(`User exists: ${user} `);
          res.send("User already exists!");
        } else {
          const newUser = new User({
            name: name,
            email: email,
            password: password,
          });
          console.log(`New User: ${newUser}`);
          // Before saving to database we need to encrypt password
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              newUser.password = hash;
              // Now we can save user with hashed password
              newUser
                .save()
                .then((user) => {
                  console.log("New User saved!");
                  res.send("User saved");
                })
                .catch((err) => {
                  console.log(`Error: ${err}`);
                  res.send("Failed");
                });
            });
          });
        }
      });
    }
  });
  
  app.post("/api/login",
    passport.authenticate("local", null),
    (req, res, info) => {
      console.log(`User logged in `);
      res.send("success");
    }
  ); 

};
