const router = require("express").Router();
const route = require("./api/index.js");

// user routes
router.use("/api", route);

module.exports = router;