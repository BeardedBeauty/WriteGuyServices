const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blog = new Schema({
    date: String,
    modified: String,
    title: String,
    content: String
});

module.exports = mongoose.model("blogs", blog);