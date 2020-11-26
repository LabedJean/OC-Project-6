const express = require("express");
const auth = require("../middlewares/auth");
const multer = require("../middlewares/multer");
const sauceCtrl = require("../controllers/sauce");

const router = express.Router();

// Gestion des verbes HTTP
router.post("/", auth, multer, sauceCtrl.createSauce); // Create sauce
router.get("/", auth, sauceCtrl.getAllSauces); // Get les sauces

module.exports = router;
