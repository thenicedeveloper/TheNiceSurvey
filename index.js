const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const config = require("./config/config");

// Mongodb schema for users
require("./models/User");
require("./models/Survey");

// since we are not returning anything from passport we can condence it to just require.
require("./config/passport");

(async () =>{
    try {
        console.log("Connecting to mongoose...")
        await mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected!")
    } catch (error) {
        handleError(error);
    }
})()

const app = express();
// middleware Making it available on req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//Static files
app.use(express.static('client/build'));

app.use(
    cookieSession( {
        // expires in 30 days 
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [config.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

// Define routes
require("./routes/loginRoutes")(app);
app.use('/api/surveys', require('./routes/surveyRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is starting at ${PORT}`));
