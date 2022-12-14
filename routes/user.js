const express = require("express");
const router = express.Router();

// controllers
const { create, getAll } = require("../controllers/user");

// register a new user and save in db
router.post("/register", create);

// get all users
router.get("/all", getAll);

module.exports = router;
