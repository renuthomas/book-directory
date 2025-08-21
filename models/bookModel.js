import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Book title is required"],
    trim: true,
  },
  author: {
    type: String,
    required: [true, "Author is required"],
  },
  publishedYear: {
    type: Number,
    required: [true, "Published date is required"],
  },
  category: {
    type: String,
    required: [true, "Category is required"],
  },
  ISBN: {
    type: String,
    required: [true, "ISBN is required"],
    unique: true,
  },
  language: {
    type: String,
    required: [true, "Language is required"],
  },
});

const Book = mongoose.model("Book", bookSchema);
export default Book;
