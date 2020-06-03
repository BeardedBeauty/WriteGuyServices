const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blog = new Schema({
    created: String,
    modified: String,
    title: String,
    content: String,
    image: String,
    about: Boolean
});

module.exports = mongoose.model("blogs", blog);