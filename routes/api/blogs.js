const auth = require("../../Auth");
const express = require("express");
const app = express();
app.use(auth);
const router = require("express").Router();
const blog = require("./../../controller/blogController.js");

// router.get("/", auth, function (req, res, next) {
//     res.json(req.blog);
// });

router.route("/")
    .get(blog.getBlogs)
    .post(blog.create)
    .put(blog.modify);