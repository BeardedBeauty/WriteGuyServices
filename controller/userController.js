const db = require("../models");
const bcrypt = require('bcryptjs');
const JWT = require("jwt-simple");
require("dotenv").config();
let TOKEN = process.env.WEB_TOKEN;

module.exports = {
    compare: function (req, res) {
        db.Users.findOne({ email: req.body.email }, function (err, user) {
            user ? bcrypt.compare(req.body.password, user.password, function (err, result) {
                console.log(result);
                let webToken = JWT.encode(user, TOKEN);
                result ? res.json({ token: webToken, result }) : res.json({ token: false, result });
            }) : res.send(false);
        }).then(userObj => res.status(200)).catch(err => res.status(422).json(err))
    },
    create: function (req, res) {
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(req.body.password, salt, function (err, hash) {
                db.Users.create({
                    name: req.body.name,
                    email: req.body.email,
                    password: hash
                }).then(dbModel => res.json(dbModel)).catch(err => res.status(422).json(err));
            });
        });
    },
    remove: function (req, res) {
        db.Users
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};