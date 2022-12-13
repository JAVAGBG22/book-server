const express = require("express");
const router = express.Router();

// controllers
const { create, listAllBooks, bookById, read } = require("../controllers/book");

// create a new book
router.post("/create", create);

// get all books
router.get("/all", listAllBooks);

// get single book
router.get("/:bookId", read);

router.param("bookId", bookById);

module.exports = router;
