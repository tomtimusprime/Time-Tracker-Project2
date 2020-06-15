const express = require("express");
const passport = require("passport");
const router = express.Router();
const db = require("../models");
const webToken = require("jsonwebtoken");
const config = require("../config/jwt-config");

function authenticate(req) {
    const jwt = req.cookies.jwt;
    const decoded = webToken.verify(jwt, config.secret);
    console.log(jwt);
    console.log(decoded);
    return decoded;
}


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
router.get("/api/dashboard/userdata",
    passport.authenticate("jwt", { session: true }),
        async (req, res) => {
            try {
                console.log("Iam in the /api/dashboard/:id");
                console.log(req.user);
                const decoded = authenticate(req);
                console.log(decoded);
                const data = await db.account.findOne({
                    where: {
                        email: decoded.email
                    },
                    include: [db.hours]
                });
                res.json(data);
            } catch (error) {
                console.error(error);

                res.status(500).send();
            }
        
});

module.exports = router;