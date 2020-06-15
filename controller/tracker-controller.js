const express = require("express");
const passport = require("passport");
const router = express.Router();
const db = require("../models");
const webToken=require("jsonwebtoken");
const config = require("../config/jwt-config");
const moment = require("moment");
const { Op } = require("sequelize");

function authenticate(req) {
    const jwt = req.cookies.jwt;
    const decoded = webToken.verify(jwt, config.secret);
    console.log(jwt);
    console.log(decoded);
    return decoded;
}

router.get("/api/tracker/user_data",
    passport.authenticate("jwt", { session: true }),
    async (req, res) => {
        try {
            const decoded = authenticate(req);
            const data = await db.account.findOne({ where: { email: decoded.email } });
            res.json(data);
        } catch (error) {
            console.error(error);

            res.status(500).send();
        }
    });

router.put("/api/tracker/user_data",
    passport.authenticate("jwt", { session: true }),
    async (req, res) => {
        try {
            const decoded = authenticate(req);
            db.account.update(
                { total_time: req.body.total_time, total_earnings: req.body.total_earnings },
                { where: { email: decoded.email } }
            );
        } catch (error) {
            console.error(error);

            res.status(500).send();
        }
    });
router.put("/api/tracker/clock_in",
    passport.authenticate("jwt", { session: true }),
    async (req, res) => {
        try {
            console.log("USER", req.user);
            db.session.create(
                { clock_in: new Date(), user_id: req.user.dataValues.id},
            )
            // .then((data) => {
            //     res.json(data);
            // });
        } catch (error) {
            console.error(error);

            res.status(500).send();
        }
    });

router.put("/api/tracker/clock_out",
    passport.authenticate("jwt", { session: true }),
    async (req, res) => {
        try {
            let activeSession = await db.session.findOne({
                where: {
                    clock_out: null
                  }
                });
            activeSession = activeSession.dataValues;
            console.log(activeSession);
            activeSession.clock_out = Date.now();
            console.log("Clock out", activeSession);
            activeSession.total_time = moment.duration(moment(activeSession.clock_out).diff(moment(activeSession.clock_in))).asSeconds();
            console.log("final", activeSession);
            db.session.update(activeSession, {
                where: {
                    id: activeSession.id
                }
            });
        } catch (error) {
            console.error(error);

            res.status(500).send();
        }
    });
router.get("/api/tracker/active_session",
    passport.authenticate("jwt", { session: true }),
    async (req, res) => {
        try {
            let activeSession = await db.session.findOne({
                where: {
                    clock_out: null
                  }
                });
            if(!activeSession) {
                res.json(null).status(200).send();
            }
            activeSession = activeSession.dataValues;
            res.json(activeSession).status(200).send();
        } catch (error) {
            console.error(error);

            res.status(500).send();
        }
    });

router.get("/api/tracker/sessions/:startDate/:endDate",
    passport.authenticate("jwt", { session: true }),
    async (req, res) => {
        try {
            const sessions = await db.session.findAll({
                where: {
                    clock_in: {
                        [Op.gte]: req.params.startDate,
                        [Op.lte]: req.params.endDate
                    }
                }
            });
            console.log("result", sessions);
            res.json(sessions.map(session => session.dataValues)).status(200).send();
        } catch (error) {
            console.error(error);

            res.status(500).send();
        }
    });

module.exports = router;