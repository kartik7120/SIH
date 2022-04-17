const express = require("express");
const User = require("../models/userSchema");

const router = express.Router();

router.get("/register", (req, res) => {
    res.render("Auth/register");
})

router.get("/login", (req, res) => {
    res.render("Auth/login");
})

router.post("/login", async (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;
    const currUser = await User.findOne({ username });
    if (currUser) {
        if (currUser.password === password) {
            console.log("LOGGED IN");
        }
        else
            console.log("WRONG USERNAME OR PASSWORD");
    }
    else
        res.send("NOT PRESENT IN THE DATABASE");
})

router.post("/register", async (req, res) => {
    console.log(req.body);
    const { username, password, email } = req.body;
    const newUser = new User({ username, password, email });
    await newUser.save();
    console.log(newUser);
    res.redirect("/");
})
module.exports = router;