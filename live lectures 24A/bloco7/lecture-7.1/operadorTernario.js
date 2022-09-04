// Simplifica a escrita de comandos de condição simples
let numero = 11;
let resultado = '';
// if(numero % 2 === 0){
//   resultado = 'Par';
// }else{
//   resultado = 'Impar';
// }

// console.log(resultado);

// Com operador ternário em uma unica linha e o mesmo resultado
numero % 2 === 0  ? 'Par' : numero > 100 ? 'maior que 100' : 'menor que 100';
console.log(resultado);