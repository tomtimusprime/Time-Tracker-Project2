const express = require("express");
const passport = require("passport");
const router = express.Router();
const session = require("express-session");
const flash = require("connect-flash");
const db = require("../models");

// Flash
router.use(
    session({
      cookie: { maxAge: 60000 },
      secret: "wootwoot",
      saveUninitialized: true,
      resave: true
    })
  );
  router.use(flash());

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

  module.exports = router;