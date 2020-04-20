const router = require("express").Router();
const users = require("./users.js");

// user routes
router.use("/users", users);

module.exports = router;