const jwt = require("jwt-simple");

const auth = (req, res, next) => {
    try {
        const token = req.cookies.token;
        console.log(token);
        if (!token) return res.status(401).json({ msg: "Token missing, authorization denied." });

        const verified = jwt.decode(token, process.env.WEB_TOKEN);

        if (!verified) return res.status(401).json({ msg: "Token does not match, authorization denied." });
        req.user = verified.id;
        next();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = auth;