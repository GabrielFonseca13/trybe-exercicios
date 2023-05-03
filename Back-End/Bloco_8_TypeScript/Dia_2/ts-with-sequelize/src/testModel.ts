import Book from './database/models/BookModel';
import Comment from './database/models/CommentModel';

(async () => {
  const books = await Book.findAll({ raw: true });
  console.table(books);

  const comments = await Comment.findAll({ raw: true });
  console.table(comments);

  const booksWithComments = await Book.findAll({ raw: true, include: ['comments'] });
  console.table(booksWithComments);
  process.exit(0);
})();