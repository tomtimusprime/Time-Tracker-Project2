const express = require("express");
const passport = require("passport");
const router = express.Router();
const db = require("../models");

// Passport
require("../config/passport")(passport);
router.use(passport.initialize());
router.use(passport.session());


router.get("/api/dashboard", async (req, res) => {
    try {

        passport.authenticate("jwt", { failureRedirect: "/login" });
        const data = await db.user.findAll();

        res.json(data);
    } catch (error) {
        console.log(error);

        res.status(500).send();
    }
});

// Get route for retrieving a single user
router.get("/api/dashboard/:id", async (req, res) => {
    try {
        passport.authenticate("jwt", { failureRedirect: "/login" });
        const data = await db.account.findOne({
            where: req.params.id
        });

        res.json(data);

    } catch (error) {
        console.log(error);

        res.status(500).send();
    }
});
module.exports = router;