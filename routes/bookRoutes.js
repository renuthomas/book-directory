import { Router } from "express";
import {
  GetBooks,
  GetBooksById,
  createBook,
  updateBook,
  deleteBook,
} from "../controllers/bookController.js";

const bookRouter = Router();

bookRouter.get("/", GetBooks);
bookRouter.get("/:id", GetBooksById);
bookRouter.post("/", createBook);
bookRouter.put("/:id", updateBook);
bookRouter.delete("/:id", deleteBook);

export default bookRouter;
