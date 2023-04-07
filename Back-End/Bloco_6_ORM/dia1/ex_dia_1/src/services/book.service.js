const { Book } = require('../models');

const getAllBooks = async () => {
  const books = await Book.findAll();
  return books;
};

const getBookById = async (id) => {
  const book = await Book.findByPk(id);
  return book;
}

module.exports = {
  getAllBooks,
  getBookById,
}