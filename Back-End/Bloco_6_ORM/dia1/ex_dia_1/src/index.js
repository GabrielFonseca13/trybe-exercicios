const express = require('express');
const { booksRouter } = require('./routes');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/books', booksRouter);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
