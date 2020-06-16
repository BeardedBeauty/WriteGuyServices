const auth = require("../../Auth");
const express = require("express");
const app = express();
app.use(auth.auth);
app.use(auth.logOut);
const router = require("express").Router();
const user = require("./../../controller/userController.js");

router.get("/", auth.auth, function (req, res, next) {
    res.json(req.user);
});

router.get("/logout", auth.logOut);

router.route("/")
    .post(user.create)
    .put(user.compare);

router.route("/passwordUpdate").put(user.updatePassword);

// router.delete(":/id", auth, function (req, res, next) {
//     console.log(req);
//     user.remove;
// });
// app.post('/authdelete', auth, function (req, res) {
//     res.send('deleted?');
//     console.log(req.body);
// }).delete(user.remove);

module.exports = router;