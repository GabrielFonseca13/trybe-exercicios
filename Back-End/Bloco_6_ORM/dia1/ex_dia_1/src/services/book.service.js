const { Book } = require('../models');

const getAllBooks = async () => {
  const books = await Book.findAll();
  return books;
}

module.exports = {
  getAllBooks,
}