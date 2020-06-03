const router = require("express").Router();
const blog = require("./../../controller/blogController.js");

// router.get("/", auth, function (req, res, next) {
//     res.json(req.blog);
// });

router.route("/")
    .get(blog.getBlogs)
    .post(blog.create);

router.route("/:id")
    .get(blog.findBlog)
    .delete(blog.deleteBlog);
// .put(blog.modify);

module.exports = router;