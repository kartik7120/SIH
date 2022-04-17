const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter a username"]
    },
    password: {
        type: String,
        required: [true, "Please enter a password"]
    },
    email: {
        type: String,
        required: [true, "Please enter a email address"]
    }
});

userSchema.plugin(passportLocalMongoose); // Will automatically going to add the username and hashed feild

const User = mongoose.model("User", userSchema);
module.exports = User;