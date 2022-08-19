const books = require('./base.js');

// const bornAt1947 = (array, year) => {
//     const buscaAutor = array.find((element) => element.author.birthYear === year);
//     return buscaAutor.author.name;
// }

// console.log(bornAt1947(books, 1947));

const smallerName = (array) => {
    const arrayNomeLivros = [];
    const buscaLivrosObjeto = array.forEach((element)=> {
    arrayNomeLivros.push(element.name);
    });

    let menorLivro = arrayNomeLivros[0];
    for (let index = 1; index < arrayNomeLivros.length; index+=1){
        if (arrayNomeLivros[index].length < menorLivro.length){
            menorLivro = arrayNomeLivros[index];
        }
    };
    return menorLivro;
};
console.log(smallerName(books));