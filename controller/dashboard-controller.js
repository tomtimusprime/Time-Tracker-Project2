const express = require("express");
// const passport = require("passport");
const router = express.Router();
const db = require("../models");

router.get("/api/dashboard", async (req, res) => {
    try {
        const data = await db.user.findAll();
    
        res.json(data);
    
      } catch (error) {
        console.log(error);
    
        res.status(500).send();
      }
  });

  module.exports = router;