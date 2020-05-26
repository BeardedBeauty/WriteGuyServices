const auth = require("../../Auth");
const express = require("express");
const app = express();
app.use(auth);
const router = require("express").Router();
const user = require("./../../controller/userController.js");

router.get("/", auth, function (req, res, next) {
    // console.log(req);
    console.log("whoa");
    res.send("yeet");
});

router.route("/")
    .post(user.create)
    .put(user.compare);

router.delete(":/id", auth, function (req, res, next) {
    console.log(req);
    res.send("yeet");
    user.remove;
});
// app.post('/authdelete', auth, function (req, res) {
//     res.send('deleted?');
//     console.log(req.body);
// }).delete(user.remove);

module.exports = router;