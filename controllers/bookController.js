import Book from "../models/bookModel.js";

export const GetBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    res.status(200).json({
      success: true,
      message: "Books fetched successfully",
      data: books,
    });
  } catch (error) {
    next(error);
  }
};

export const GetBooksById = async (req, res, next) => {
  try {
    const bookId = req.params.id;
    const book = await Book.findById(bookId);
    if (!book) {
      const error = new Error("Book not found");
      error.status = 404;
      throw error;
    }
    res.status(200).json({
      success: true,
      message: "Book fetched successfully",
      data: book,
    });
  } catch (error) {
    next(error);
  }
};

export const createBook = async (req, res, next) => {
  try {
    const { title, author, publishedYear, category, isbn, language } = req.body;

    const book = await Book.create({
      title,
      author,
      publishedYear,
      category,
      ISBN: isbn,
      language,
    });
    if (!book) {
      const error = new Error("Book not created");
      error.status = 404;
      throw error;
    }
    res.status(200).json({
      success: true,
      message: "Book created successfully",
      data: book,
    });
  } catch (error) {
    next(error);
  }
};

export const updateBook = async (req, res, next) => {
  try {
    const bookId = req.params.id;
    const { title, author, publishedYear, category, isbn, language } = req.body;
    const updatedBook = await Book.findByIdAndUpdate(
      bookId,
      { title, author, publishedYear, category, ISBN: isbn, language },
      { new: true, runValidators: true }
    );

    if (!updatedBook) {
      const error = new Error("Book not updated");
      error.status = 404;
      throw error;
    }
    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: updatedBook,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteBook = async (req, res, next) => {
  try {
    const bookId = req.params.id;
    const bookDeleted = await Book.findByIdAndDelete(bookId);

    if (!bookDeleted) {
      const error = new Error("No book found with the given ID.");
      error.status = 404;
      throw error;
    }
    res.status(200).json({
      success: true,
      message: "Book deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
