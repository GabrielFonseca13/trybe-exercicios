const BookService = require('../services/book.service');

const getAll = async (_req, res) => {
  try{
    const books = await BookService.getAll();
    return res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Ocorreu um erro'});
  };
};

const getById = async (req,res) => {
  try {
    const { id } = req.params;
    const book = await BookService.getById(id);

    if(!book) return res.status(404).json({ "message": "Book not found" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  };
};

const createBook = async(req,res) => {
  try {
    const {title, author, pageQuantity} = req.body;
    const newBook = await BookService.create({title, author,pageQuantity});
    res.status(201).json(newBook);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
}

module.exports = { 
  getAll,
  getById,
  createBook,
};