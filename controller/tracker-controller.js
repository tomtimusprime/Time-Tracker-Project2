const express = require("express");
const passport = require("passport");
const router = express.Router();
const db = require("../models");

router.get("/api/tracker/user_data", async(req,res)=>{
    try {
      const data = await db.account.findAll();
      res.json(data);
    } catch (error) {
      console.error(error);
  
      res.status(500).send();
    }
  })

  module.exports=router;