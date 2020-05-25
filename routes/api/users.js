const router = require("express").Router();
const express = require("express");
const app = express();
const user = require("./../../controller/userController.js");
const auth = require("../../Auth/index.js");

router.route("/").post(user.create);
router.route("/login").put(user.compare);
// router.route("/deleteUser").delete(auth, user.remove);
app.get('/deleteUser', auth, function (req, res) {
    res.send('deleted?');
}).delete(user.remove);

module.exports = router;