const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    googleId: String,
    name: String,
    email: String,
    password: String,
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("users", UserSchema); 