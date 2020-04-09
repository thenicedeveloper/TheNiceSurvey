const mongoose = require("mongoose");

const UserScema = new mongoose.Schema({
    googleId: String,
    name: String,
    email: String,
    password: String,
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const User = mongoose.model("User", UserScema);
module.exports = User;