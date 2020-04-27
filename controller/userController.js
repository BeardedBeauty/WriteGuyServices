const db = require("../models");
const bcrypt = require('bcryptjs');

module.exports = {
    // findAll: function (req, res) {
    //     db.Users.find(req.query)//.sort({ date: -1 })
    //         .then(img => res.json(img))
    //         .catch(err => res.status(422).json(err));
    // },


    // console.log(req.body)
    // bcrypt.genSalt(10, function (err, salt) {
    //     bcrypt.hash(req.password, salt, function (err, hash) {
    //         req.password = hash;
    //         req.save(res);

    //     });
    // });
    find: function (req, res) {
        db.Users
            .findById({ _id: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        let qi;
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(req.body.password, salt, function (err, hash) {
                qi = {
                    name: req.body.name,
                    email: req.body.email,
                    password: hash
                }
            });
        });
        db.Users
            .create(qi)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Users
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};