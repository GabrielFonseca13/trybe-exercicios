const { bookService } = require("../services");

const getAllBooks = async (_req, res) => {
  try {
    const books = await bookService.getAllBooks();
    return res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({message: 'Ocorreu um erro'});
  }
}

module.exports = {
  getAllBooks,
};