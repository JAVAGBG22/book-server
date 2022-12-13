const express = require("express");
const router = express.Router();

// controllers
const { create } = require("../controllers/user");

// create a new user
router.post("/register", create);

module.exports = router;
