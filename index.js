const express = require("express");
const path = require("path");
const app = express();
const passport = require("passport");
const session = require("express-session");
const LocalStrategy = require("passport-local");
const User = require("./models/userSchema");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/SIH')
    .then(() => {
        console.log("CONNECTED TO THE DATABASE");
    }).catch((err) => {
        console.log("OH NO ERROR", err);
    })

app.use(express.urlencoded({ extended: true }));


app.use(session({
    secret: "lake",
    resave: true,
    saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

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