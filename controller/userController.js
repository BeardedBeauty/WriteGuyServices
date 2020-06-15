const db = require("../models");
const bcrypt = require('bcryptjs');
const JWT = require("jwt-simple");
require("dotenv").config();
let TOKEN = process.env.WEB_TOKEN;

module.exports = {
    compare: function (req, res) {
        db.Users.findOne({ email: req.body.email }, function (err, user) {
            user ? bcrypt.compare(req.body.password, user.password, function (err, result) {
                const jwtencoded = JWT.encode(user, TOKEN);
                console.log(res.body)
                result ? res.cookie("writeToken", jwtencoded, {
                    httpOnly: true,
                    // secure: true,
                    // sameSite: true,
                }).sendStatus(200) : res.status(401).json(result);
            }) : res.status(401).json("false");
        }).catch(err => res.status(422).json(err));
    },
    updatePassword: function (req, res) {
        db.Users.findOne({ email: req.body.email }, function (err, user) {
            if (user) {
                bcrypt.compare(req.body.current, user.password, function (err, result) {
                    bcrypt.genSalt(10, function (err, salt) {
                        bcrypt.hash(req.body.new, salt, function (err, hash) {
                            if (result) db.Users.updateOne({ _id: user._id }, { password: hash }).then(res.sendStatus(200));
                            else { res.sendStatus(401); }
                            if (err) console.log(err);
                        });
                        if (err) console.log(err);
                    });
                    if (err) console.log(err);
                });
            }
        }).catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(req.body.password, salt, function (err, hash) {
                db.Users.create({
                    name: req.body.name,
                    email: req.body.email,
                    password: hash,
                    zone: req.body.zone,
                    admin: false
                }).then(dbModel => res.json(dbModel)).catch(err => res.status(422).json(err));
            });
        });
    },
    remove: function (req, res) {
        console.log(req.body);
        db.Users
            .findById({ _id: req.body.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};