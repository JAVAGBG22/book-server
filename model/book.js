const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      // visa utan required
      required: true,
    },
    pages: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: ObjectId,
      ref: "Author",
      required: true,
    },
    coAuthor: {
      type: ObjectId,
      ref: "Author",
    },
    priceExVat: {
      type: Number,
      required: true,
    },
    isbn: {
      type: String,
      required: true,
    },
    bookCoverUrl: {
      type: String,
    },
  },
  //createdAt
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
