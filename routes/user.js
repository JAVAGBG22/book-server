const express = require("express");
const router = express.Router();

// controllers
const { create, getAll } = require("../controllers/user");

// create a new user
router.post("/register", create);
router.get("/all", getAll);

module.exports = router;
