const express = require("express");
const passport = require("passport");
const router = express.Router();
const db = require("../models");

// Passport
require("../config/passport")(passport);
router.use(passport.initialize());
router.use(passport.session());

router.get("/account", async (req, res) => {
  try {
    if (req.user) {
      const data = await db.user.findAll();

      res.render("user", { account: data });
    } else {
      res.redirect("/login");
    }
  } catch (error) {
    console.error(error);

    res.status(500).send();
  }
});

router.get(
  "/api/account",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const data = await db.user.findAll({ include: [db.history] });

      res.json(data);
    } catch (error) {
      console.error(error);

      res.status(500).send();
    }
  }
);

router.get("/api/account/:id", async (req, res) => {
  try {
    const data = await db.account.findAll({ where: { id: req.params.id }, include: [db.history] });

    res.json(data);
  } catch (error) {
    console.error(error);

    res.status(500).send();
  }
});

router.post(
  "/api/account",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    console.log("this is api/account");
    const data = await db.account.create(req.body);

    res.json(data);
  }
);

router.delete(
  "/api/account/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const data = await db.account.destroy({ where: { id: req.params.id } });

      res.json(data);
    } catch (error) {
      console.error(error);

      res.status(500).send();
    }
  }
);

module.exports = router;
