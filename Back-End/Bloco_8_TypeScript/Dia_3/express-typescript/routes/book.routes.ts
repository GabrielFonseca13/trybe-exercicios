import { Router } from "express";
import BooksController from "../controllers/books.controller";
import { validateBook, validatePartialBook } from "../middlewares/books.middlewares";

const router = Router();

const booksController = new BooksController();

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
  .put(validateBook, booksController.update)
  .delete(booksController.remove)
  .patch(validatePartialBook, booksController.partialUpdate);

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


export default router;