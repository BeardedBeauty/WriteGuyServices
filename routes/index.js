const router = require("express").Router();
const users = require("./api/index.js");

// user routes
router.use("/api", users);

module.exports = router;