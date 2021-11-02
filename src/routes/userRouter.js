const router = require("express").Router();
const userController = require("../controllers/userController");

router.post("/users", userController.store);

module.exports = router;
