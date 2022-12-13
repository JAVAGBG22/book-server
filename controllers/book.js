const Book = require("../model/book");

// create a new book
// POST /api/create/book
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
// GET /api/all/books
exports.listAllBooks = async (req, res) => {
  const allBook = await Book.find({}).sort({ createdAt: 1 }).exec();
  res.json(allBook);
};

// list a single book
// GET /api/single/:book
exports.listSingleBook = async (req, res) => {
  try {
    let book = req.params._id;
    Book.findById({ _id: book }).exec();
    res.json(book);
  } catch (err) {
    console.log(err);
    return res.status(400).send("No matching id!");
  }
};
