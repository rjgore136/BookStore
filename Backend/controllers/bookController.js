import bookModel from "../models/bookModel.js";

//controller to add book
const addBook = async (req, res) => {
  const { title, author, publishYear } = req.body;
  try {
    if (!title || !author || !publishYear) {
      return res.json({
        success: false,
        message: "Please send all required data!!",
      });
    }
    const newBook = {
      title,
      author,
      publishYear,
    };
    const book = await bookModel.create(newBook);
    res.json({ success: true, message: "book added successfully!" });
  } catch (e) {
    res.json({ success: false, message: e.message });
  }
};

//controller to get all books from db
const getBooks = async (req, res) => {
  try {
    const books = await bookModel.find({});
    // console.log(books);
    res.json({
      success: true,
      message: {
        count: books.length,
        data: books,
      },
    });
  } catch (e) {
    res.json({ success: false, message: e.message });
  }
};

//controller to get one book from db
const getBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await bookModel.findById(id);
    // console.log(book);
    res.json({
      success: true,
      message: book,
    });
  } catch (e) {
    res.json({ success: false, message: e.message });
  }
};

//to update a book
const updateBook = async (req, res) => {
  const { title, author, publishYear } = req.body;
  const { id } = req.params;
  try {
    if (!title || !author || !publishYear) {
      return res.json({
        success: false,
        message: "Please send all required data!!",
      });
    }
    const result = await bookModel.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.json({
        success: false,
        message: "Book not found!!",
      });
    }
    res.json({ success: true, book: result });
  } catch (e) {
    res.json({ success: false, message: e.message });
  }
};

//to delete a book
const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await bookModel.findByIdAndDelete(id);
    if (!result) {
      return res.json({
        success: false,
        message: "Book not found!!",
      });
    }
    res.json({ success: true, book: result });
  } catch (e) {
    res.json({ success: false, message: e.message });
  }
};

export { addBook, getBooks, getBook, updateBook, deleteBook };
