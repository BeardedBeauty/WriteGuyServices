const jwt = require("jwt-simple");

module.exports = {
    auth: (req, res, next) => {
        try {
            let token = req.headers.cookie;
            let verified;
            if (token) {
                token = token.replace(/^writeToken=/i, "");
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
    },
    logOut: async (req, res) => {
        res.clearCookie('writeToken');
        res.status(200).send({ message: 'Logged out' });
    },
    logIn: async (req, res, next) => {

        next();
    }
}