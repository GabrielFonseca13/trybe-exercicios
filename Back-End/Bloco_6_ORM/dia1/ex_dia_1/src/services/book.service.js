const { Book } = require('../models');

const getAllBooks = async () => {
  const books = await Book.findall();
  return books;
}

module.exports = {
  getAllBooks,
}