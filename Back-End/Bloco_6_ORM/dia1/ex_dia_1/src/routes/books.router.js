const express = require('express');
const { booksController } = require('../controllers');

const router = express.Router();

router.get('/', booksController.getAllBooks);
router.get('/:id',  booksController.getBookById);
router.post('/', booksController.createBook);

module.exports = router;