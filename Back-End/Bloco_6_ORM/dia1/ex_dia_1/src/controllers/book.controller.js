const { bookService } = require("../services");

const getAllBooks = async (_req, res) => {
  try {
    const books = await bookService.getAllBooks();
    return res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({message: 'Ocorreu um erro'});
  }
};

const getBookById = async (req,res) => {
  try {
    const { id } = req.params; 
    const book = await bookService.getBookById(id);
    if(!book) return res.status(404).json({message: 'Book not found'})
    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({message: 'Ocorreu um erro'});
  }
};

const createBook = async (req,res) => {
  try {
    const {title, author, pageQuantity} = req.body;
    const newBook = await bookService.createBook({ title, author, pageQuantity });
    return res.status(201).json(newBook);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({message: 'Ocorreu um erro'});
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
};