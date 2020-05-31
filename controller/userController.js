const db = require("../models");
const bcrypt = require('bcryptjs');
const JWT = require("jwt-simple");
// const auth = require("../Auth");
require("dotenv").config();
let TOKEN = process.env.WEB_TOKEN;

module.exports = {
    compare: function (req, res) {
        db.Users.findOne({ email: req.body.email }, function (err, user) {
            user ? bcrypt.compare(req.body.password, user.password, function (err, result) {
                const jwtencoded = JWT.encode(user, TOKEN);
                result ? res.cookie("token", jwtencoded, { httpOnly: true }).sendStatus(200) : res.status(401).json(result);
            }) : res.status(401).json("false");
        }).catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(req.body.password, salt, function (err, hash) {
                db.Users.create({
                    name: req.body.name,
                    email: req.body.email,
                    password: hash,
                    zone: req.body.zone
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