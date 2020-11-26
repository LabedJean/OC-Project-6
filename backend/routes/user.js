const express = require("express");
const userCtrl = require("../controllers/user");

const router = express.Router();

// Declaration des routes
router.post("/signup", userCtrl.signup); // Create new User
router.post("/login", userCtrl.login); // Connect User
module.exports = router;
