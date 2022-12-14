const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    pages: {
      type: Number,
    },
    description: {
      type: String,
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
    },
    isbn: {
      type: String,
    },
    bookCoverUrl: {
      type: String,
    },
  },
  // createdAt
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
