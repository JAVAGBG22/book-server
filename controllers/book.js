const Book = require("../model/book");

// create a new book
// POST /api/books/create
exports.create = async (req, res) => {
  try {
    const book = await new Book({
      ...req.body,
    }).save();
    res.json(book);
  } catch (err) {
    console.log(err);
    return res.status(400).send("Book creation failed");
  }
};

// list all books
// GET /api/books/all
exports.listAllBooks = async (req, res) => {
  const allBook = await Book.find({})
    .populate("author", "name")
    .populate("coAuthor", "name")
    .sort({ createdAt: 1 })
    .exec();
  res.json(allBook);
};

// get book by id
exports.bookById = (req, res, next, id) => {
  Book.findById(id)
    .populate("author", "name")
    .populate("coAuthor", "name")
    .exec((err, book) => {
      if (err || !book) {
        return res.status(400).json({
          error: "Book not found",
        });
      }
      req.book = book;
      next();
    });
};

// read book by id param
// GET /api/books/:bookId
exports.read = (req, res) => {
  return res.json(req.book);
};
