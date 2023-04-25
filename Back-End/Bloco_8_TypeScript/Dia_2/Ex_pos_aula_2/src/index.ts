import Author from "./database/models/AuthorModel";
import Genre from "./database/models/GenreModel";
import Book from "./database/models/BookModel";
import sequelize from "sequelize";

// Busca todos os autores
// (async () => {
//   const authors = await Author.findAll();
//   console.table(authors.map((author) => author.toJSON()));
// })();

// Busca todos os Generos
// (async () => {
//   const genres = await Genre.findAll();
//   console.table(genres.map((genre) => genre.toJSON()));
// })();

// Busca todos os Livros
// (async () => {
//   const books = await Book.findAll();
//   console.table(books.map((book) => book.toJSON()))
//   process.exit(0)
// })();


(async () => {
  const data = await Author.findAll({
    include: {
      model: Book,
      attributes: [],
    },
    attributes: [
      ['name', 'author'],
      [sequelize.fn('COUNT', sequelize.col('books.id')), 'totalBooks'],
    ],
    group: 'authors.name',
    order: [['totalBooks', 'DESC']],
    raw: true,
  });

  console.log(data);
  process.exit(0);
})();