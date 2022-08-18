const books = require('./base.js');

const bornAt1947 = (obj, year) => {
    const buscaAutor = obj.find((element) => element.author.birthYear === year);
    return buscaAutor.author.name;
}

console.log(bornAt1947(books, 1947));