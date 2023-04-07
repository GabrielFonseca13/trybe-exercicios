const express = require('express');
const { booksController } = require('../controllers');

const router = express.Router();

router.get('/', booksController.getAllBooks);

module.exports = router;