const express = require("express");
const User = require("../models/userSchema");
const router = express.Router();
const localStratrgy = require("passport-local-mongoose");
const passport = require("passport");

router.get("/register", (req, res) => {
    res.render("Auth/register");
})

router.get("/login", (req, res) => {
    res.render("Auth/login");
})

router.post("/login", passport.authenticate("local", { failureRedirect: "/register" }), async (req, res) => {
    // console.log(req.body);
    // const { username, password } = req.body;
    // const currUser = await User.findOne({ username });
    // if (currUser) {
    //     if (currUser.password === password) {
    //         res.send("LOGGED IN");
    //     }
    //     else
    //         res.send("WRONG USERNAME OR PASSWORD");
    // }
    // else
    //     res.send("NOT PRESENT IN THE DATABASE");

    res.send("Logged in");
})

router.post("/register", async (req, res) => {
    console.log(req.body);
    const { username, password, email } = req.body;
    const newUser = new User({ username, email });

    const registeredUser = await User.register(newUser, password);
    console.log(registeredUser);
    req.login(registeredUser, err => {
        if (err) {
            next(err);
        }
        console.log(req.session);
        res.send("User is registered");
    })
    // await newUser.save();
    // console.log(newUser);
    // res.redirect("/");


})
module.exports = router;