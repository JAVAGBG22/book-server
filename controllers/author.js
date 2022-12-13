const Author = require("../model/author");

// create a new author
// POST /api/create/author
exports.create = async (req, res) => {
  try {
    const author = await new Author({
      ...req.body,
    }).save();
    res.json(author);
  } catch (err) {
    console.log(err);
    return res.status(400).send("Author creation failed");
  }
};
