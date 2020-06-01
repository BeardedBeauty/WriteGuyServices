const jwt = require("jwt-simple");

const auth = (req, res, next) => {
    try {
        let token = req.headers.cookie;
        let verified;
        if (token) {
            token = token.replace(/^token=/i, "");
            verified = jwt.decode(token, process.env.WEB_TOKEN);
            if (!verified) return res.status(401).json({ msg: "Token does not match, authorization denied." });
        }
        else return res.status(401).json({ msg: "Token missing, authorization denied." });
        verified.admin ? req.user = {
            name: verified.name,
            email: verified.email,
            admin: verified.admin
        } : req.user = {
            name: verified.name,
            email: verified.email
        }
        next();
    } catch (err) {
        res.status(500).json({ error: "Unauthorized" });
    }
};

module.exports = auth;