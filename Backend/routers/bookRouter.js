import express from "express";
import {
  addBook,
  deleteBook,
  getBook,
  getBooks,
  updateBook,
} from "../controllers/bookController.js";

const bookRouter = express.Router();

bookRouter.post("/add", addBook);  
bookRouter.get("/get", getBooks);
bookRouter.get("/get/:id", getBook);
bookRouter.put("/update/:id", updateBook);
bookRouter.delete("/delete/:id", deleteBook);

export default bookRouter;
