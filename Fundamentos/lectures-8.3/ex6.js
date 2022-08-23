const books = require ('./baseBook')

// 🚀 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

const expectedResult = [
    'O Senhor dos Anéis',
    'Fundação',
    'O Chamado de Cthulhu',
  ];
  
  function oldBooks(array) {
    const currentYear = new Date().getFullYear();
    return array.filter((book) =>currentYear - book.releaseYear >= 60).map((book)=> book.name)
  }

  console.log(oldBooks(books))