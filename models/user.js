const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
    name: String,
    email: String,
    password: String,
    zone: String,
    admin: Boolean
});

module.exports = mongoose.model("users", user);