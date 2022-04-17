const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter a username"]
    },
    password: {
        type: String,
        required: [true, "Please enter a password"]
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;