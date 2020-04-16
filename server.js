const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const routes = require("./routes");
const bcrypt = require("bcryptjs");
require("dotenv").config();
app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")));
app.use(express.urlencoded({ extended: true }));
app.use(routes);

const PORT = process.env.PORT || 3008;
let mdb = process.env.MONGODB_URI

mongoose.connect(mdb, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log(`Database connected successfully`);
}).catch(err => console.log(err));

app.get("*", (req, res) => { res.sendFile(path.join(__dirname, "client", "build", "index.html")); });

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow=Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(PORT, () => console.log("port connected: " + PORT));