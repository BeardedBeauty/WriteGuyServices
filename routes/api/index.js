const router = require("express").Router();
const users = require("./users.js");
const blogs = require("./blogs.js");

// user routes
router.use("/users", users);
router.use("/blogs", blogs);

module.exports = router;