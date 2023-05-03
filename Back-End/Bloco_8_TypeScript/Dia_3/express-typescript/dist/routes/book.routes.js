"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const books_controller_1 = __importDefault(require("../controllers/books.controller"));
const router = (0, express_1.Router)();
const booksController = new books_controller_1.default();
// router.get('/books', booksController.getAll);
// router.get('/books/:id', booksController.getById);
// router.post('books', booksController.create);
// router.put('/books/:id', booksController.update);
// REFATORANDO 
router
    .route('/books')
    .get(booksController.getAll)
    .post(booksController.create);
router
    .route('/books/:id')
    .get(booksController.getById)
    .put(booksController.update)
    .delete(booksController.remove);
// alternativa ao uso do bind
// router.get('/books', (req, res) => booksController.getAll(req, res));
// router.get('/books/:id', (req, res) => booksController.getById(req, res));
// router.post('/books', (req, res) => booksController.create(req, res));
// router.put('/books/:id', (req, res) => booksController.update(req, res));
// Alternativa ao uso do bind
// router
//   .route('/books')
//   .get((req, res) => booksController.getAll(req, res))
//   .post((req, res) => booksController.create (req, res));
// router
//   .route('/books/:id')
//   .get((req, res) => booksController.getById(req, res))
//   .put((req, res) => booksController.update(req, res))
//   .delete((req, res) => booksController.remove(req, res));
exports.default = router;
