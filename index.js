const express = require("express");
const path = require("path");
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/SIH')
    .then(() => {
        console.log("CONNECTED TO THE DATABASE");
    }).catch((err) => {
        console.log("OH NO ERROR", err);
    })

const User = require("./models/userSchema");
const authRoutes = require("./routes/authRoutes");
app.set("view engine", "ejs");
app.set("views", "views");
app.set("views", path.join(__dirname, "views"));

app.use("/", authRoutes);

app.get("/", (req, res) => {
    res.render("index");
})

app.use((err, req, res, next) => {
    if (err) {
        res.send("error");
        console.log(err);
    }
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000");
})