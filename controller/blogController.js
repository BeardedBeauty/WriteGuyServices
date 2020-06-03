const db = require("../models");

module.exports = {
    create: function (req, res) {
        if (req.body.title && req.body.content) {
            db.Blogs.create({
                title: req.body.title,
                content: req.body.content,
                created: req.body.created,
                image: req.body.image,
                modified: "-",
                about: false
            }).then(dbModel => res.json(dbModel)).catch(err => res.status(422).json(err));
        }
        else { res.status(401).json("Content or title not provided"); }
    },
    getBlogs: function (req, res) {
        db.Blogs.find({ about: false }).then(blogs => res.json(blogs)).catch(err => res.status(422).json(err));
    },
    deleteBlog: function (req, res) {
        db.Blogs
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}