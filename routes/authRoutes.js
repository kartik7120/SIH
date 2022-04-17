const express = require("express");
const User = require("../models/userSchema");

const router = express.Router();

router.get("/register", (req, res) => {
    res.render("Auth/register");
})

router.post("/register", async (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;
    const newUser = new User({ username, password });
    await newUser.save();
    console.log(newUser);
    res.send("POST ROUTE FOR REGISTER");
})

module.exports = router;