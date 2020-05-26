const jwt = require("jwt-simple");
// const express = require('express');
// const app = express();
// const cookieParser = require('cookie-parser');
// app.use(cookieParser())

const auth = (req, res, next) => {
    try {
        // const token = req.headers.cookie;
        // console.log(token);

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1ZWNjMTZhNjY5NWY0NTBjMjU0MmMzZDUiLCJuYW1lIjoic29uaWMiLCJlbWFpbCI6ImdvdHRhQGdvLmZhc3QiLCJwYXNzd29yZCI6IiQyYSQxMCRLbWFBSzFiNTdacC9QenRDbjZkVk9PRU1yYzI0ZVdVTGl5WTI4d2dub0d2VU5hajYxMmVwcSIsIl9fdiI6MH0.l8FU55ZYjZPSYEsv5YyotkkIoSPUmDzmx4xpigbYkVU"
        if (!token) return res.status(401).json({ msg: "Token missing, authorization denied." });

        const verified = jwt.decode(token, process.env.WEB_TOKEN);

        if (!verified) return res.status(401).json({ msg: "Token does not match, authorization denied." });
        req.user = verified._id;
        console.log(req.user);
        next();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = auth;