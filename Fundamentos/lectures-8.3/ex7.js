const books = require ('./baseBook')

// 🚀 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// Dica: cada inicial termina com um ponto.

const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName(array) {
    return array.filter((book) => (book.author.name[1] === '.' 
    && book.author.name[4] === '.'
    && book.author.name[7] === '.'))[0].name;
}
console.log(authorWith3DotsOnName(books));