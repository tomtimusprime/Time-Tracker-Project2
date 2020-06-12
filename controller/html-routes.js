const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
    if (req.user) {
        res.sendFile(path.join(__dirname, "../public/login.html"));
        // res.render("index", { user: req.user });
    } else {
        res.redirect("/login");
    }
});

router.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/login.html"));
});

router.get("/tracker", (req, res) => {
    if (req.user) {
        res.sendFile(path.join(__dirname, "../public/tracker.html"));
    } else {
        res.redirect("/login");
    }
});


router.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
});

router.get("/dashboard", (req, res) => {
    console.log(req.user);

    if (req.user) {
        res.sendFile(path.join(__dirname, "../public/dashboard.html"));

    } else {
        res.redirect("/login");
    }

});

module.exports = router;