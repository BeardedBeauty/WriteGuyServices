const router = require("express").Router();
const user = require("./../../controller/userController.js");

router.route("/").post(user.create);
// .get(user.findAll)

router.route("/login")
    .delete(user.remove)
    .put(user.compare)
// .put(user.update);

module.exports = router;