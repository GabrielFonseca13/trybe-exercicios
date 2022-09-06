/* Spread Operator: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax
É uma sintaxe de propagação. Em outras palavras, permite a expansão de um objeto que seja iterável ou que um objeto seja expandido. */

const horrorBooks = ['It', 'The Shining'];
const scifiBooks = ['I, Robot', 'Caves of Steel', 'The End of Eternity'];

let awesomeBooks = [...horrorBooks, ...scifiBooks];

// horrorBooks.forEach((book)=>{
//   awesomeBooks.push(book);
// });
// scifiBooks.forEach((book)=>{
//   awesomeBooks.push(book);
// })


// console.log(awesomeBooks);
module.exports = { awesomeBooks }