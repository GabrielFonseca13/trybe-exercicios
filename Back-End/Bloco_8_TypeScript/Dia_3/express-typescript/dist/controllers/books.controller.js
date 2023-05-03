"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const statusCodes_1 = __importDefault(require("../statusCodes"));
const books_service_1 = __importDefault(require("../services/books.service"));
class BooksController {
    constructor(bookService = new books_service_1.default()) {
        this.bookService = bookService;
        this.getAll = this.getAll.bind(this);
        this.getById = this.getById.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.remove = this.remove.bind(this);
    }
    getAll(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const books = yield this.bookService.getAll();
            res.status(statusCodes_1.default.OK).json(books);
        });
    }
    ;
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id, 10);
            const book = yield this.bookService.getById(id);
            if (!book) {
                res.status(statusCodes_1.default.NOT_FOUND).json({ message: 'Book not Found' });
            }
            else {
                res.status(statusCodes_1.default.OK).json(book);
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const book = req.body;
            const bookCreated = yield this.bookService.create(book);
            res.status(statusCodes_1.default.CREATED).json(bookCreated);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            const book = req.body;
            yield this.bookService.update(id, book);
            res.status(statusCodes_1.default.NO_CONTENT).end();
        });
    }
    remove(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            yield this.bookService.remove(id);
            res.status(statusCodes_1.default.NO_CONTENT).end();
        });
    }
}
exports.default = BooksController;
