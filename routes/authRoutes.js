const express = require("express");
const User = require("../models/userSchema");

const router = express.Router();

router.get("/register", (req, res) => {
    res.render("Auth/register");
})

router.get("/login", (req, res) => {
    res.render("login");
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