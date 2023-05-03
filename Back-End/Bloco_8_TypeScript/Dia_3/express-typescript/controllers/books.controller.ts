import { Request, Response } from "express";
import statusCodes from "../statusCodes";
import BookService from "../services/books.service";

class BooksController {
  bookService: BookService;

  constructor(bookService = new BookService()) {
    this.bookService = bookService;
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.partialUpdate = this.partialUpdate.bind(this);
    this.remove = this.remove.bind(this);
  }

  async getAll(_req: Request, res: Response): Promise<void> {
    const books = await this.bookService.getAll();
    res.status(statusCodes.OK).json(books);
  };

  async getById(req: Request, res: Response): Promise<void> {
    const id = parseInt(req.params.id, 10);

    const book = await this.bookService.getById(id);
    if (!book) {
      res.status(statusCodes.NOT_FOUND).json({ message: 'Book not Found' });
    } else {
      res.status(statusCodes.OK).json(book);
    }
  }

  async create(req: Request, res: Response): Promise<void> {
    const book = req.body;
    const bookCreated = await this.bookService.create(book);
    res.status(statusCodes.CREATED).json(bookCreated);
  }

  async update(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id);
    const book = req.body;
    await this.bookService.update(id, book);

    res.status(statusCodes.NO_CONTENT).end();
  }

  async partialUpdate(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id);
    const book = req.body;
    await this.bookService.partialUpdate(id, book);

    res.status(statusCodes.NO_CONTENT).end();
  }

  async remove(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id);
    await this.bookService.remove(id);

    res.status(statusCodes.NO_CONTENT).end();
  }
}

export default BooksController;