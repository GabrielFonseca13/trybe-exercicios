const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

//   2 - Crie uma string com os nomes de todas as pessoas autoras.
// const expectedResult =
//   'George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.';

const reduceNames = (array) => {
  const buscaNomes = array.reduce((autores, livro) => {
    return `${autores}, ${livro.author.name}`;
  }, '');
  return buscaNomes;
};

// console.log(reduceNames(books));

// 🚀 3- Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
// const expectedResult = 43;

const averageAge = (array) => {
    const searchRealeaseAge = array.reduce((somaIdade, livro) => somaIdade + (livro.releaseYear - livro.author.birthYear), 0);
    return searchRealeaseAge / array.length
}
// console.log(averageAge(books));

// 🚀 4- Encontre o livro com o maior nome.

// const expectedResult = {
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     genre: 'Fantasia',
//     author: {
//       name: 'George R. R. Martin',
//       birthYear: 1948,
//     },
//     releaseYear: 1991,
//   };
  
    const longestNamedBook = (array) => {
        const getBiggerName = array.reduce((livroMaiorNome, livro) => {
            if ((livroMaiorNome.name).length < (livro.name).length){
                return livro;
            } else {
                return livroMaiorNome;
            }
        })
        return getBiggerName;
  }

  console.log(longestNamedBook(books));