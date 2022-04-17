const express = require("express");

const router = express.Router();

router.get("/register", (req, res) => {
    res.render("Auth/register");
})

router.post("/register", (req, res) => {
    res.send("POST ROUTE FOR REGISTER");
})

module.exports = router;