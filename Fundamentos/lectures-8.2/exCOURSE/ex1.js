const books = require('./base.js');


// 🚀 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
// Dica: use a função find.

// const bornAt1947 = (array, year) => {
//     const buscaAutor = array.find((element) => element.author.birthYear === year);
//     return buscaAutor.author.name;
// }

// console.log(bornAt1947(books, 1947));

// 2 - Retorne o nome do livro de menor nome.
// Dica: use a função forEach.


// const smallerName = (array) => {
//     const arrayNomeLivros = [];
//     const buscaLivrosObjeto = array.forEach((element)=> {
//     arrayNomeLivros.push(element.name);
//     });

//     let menorLivro = arrayNomeLivros[0];
//     for (let index = 1; index < arrayNomeLivros.length; index+=1){
//         if (arrayNomeLivros[index].length < menorLivro.length){
//             menorLivro = arrayNomeLivros[index];
//         }
//     };
//     return menorLivro;
// };
// console.log(smallerName(books));

// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.

// const findLettersBook = (array) => {
//     const localizaBook = array.find((elemento) => elemento.name.length === 26);
//     return localizaBook;
// }

// console.log(findLettersBook(books, 26));

// 4 - Ordene os livros por data de lançamento em ordem decrescente.

// const sortReleaseYear = (array) => {
//     buscaLivros = array.sort((livroA , livroB)=> livroB.releaseYear - livroA.releaseYear);
//     // buscaLivros.releaseYear.sort((a,b)=> a-b);
//     return buscaLivros
// }

// console.log(sortReleaseYear(books));

// 🚀 5 - Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.

// const verifyAuthorBorn = (array) => {
//     const verifyCenturyBorn = array.every((element) => element.author.birthYear >= 1901 &&  element.author.birthYear <= 2001)
//     return verifyCenturyBorn;
// }
// console.log(verifyAuthorBorn(books));

// 🚀 6 - Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.

const verifyRelease80Decade = (array) => {
    const verifyReleaseYear = array.some((elemento) => elemento.releaseYear >= 1980 && elemento.releaseYear <= 1989);
    return verifyReleaseYear;
};
console.log(verifyRelease80Decade(books));

