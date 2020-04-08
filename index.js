const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const path          = require('path');
const config = require("./config/config");
const app = express();

(async () =>{
    try {
        console.log("Connecting to mongoose...")
        await mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected!")
    } catch (error) {
        handleError(error);
    }
})()

require("./models/Survey");

//Static files
app.use(express.static('client/build'));

app.use(
    cookieSession( {
        // expires in 30 days 
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [config.cookieKey]
    })
);



//Define routes
app.use('/api/surveys', require('./routes/surveyRoutes'))



const PORT          = process.env.PORT || 5000;
app.listen(PORT, ()=>  console.log(`Server started on ${PORT}`))