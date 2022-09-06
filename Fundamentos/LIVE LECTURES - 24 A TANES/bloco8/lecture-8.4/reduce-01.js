// Links uteis:
// HoF REDUCE
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// O reduce é uma função muito poderosa, que permite que a gente combine todo o resultado da aplicação da função passada como parâmetro nos elementos do array em um único resultado.
const { cervejas } = require('./dados');

// Apresentar a soma de todos os números do Array

// accumulatorFor = 2
// 2 + 3 = 5
// 5 + 4 = 9
// 9 + 6 = 15
// ...
// Usando o FOR normal
// let accumulatorFor = 0;
// for(let i = 0; i < numeros.length; i += 1){
//   accumulatorFor += numeros[i];
// }

// console.log('Soma dos números: ',accumulatorFor);

// Usando o REDUCE
const numeros = [112, 5, 9, 15, 89, 0, 13, 3, 110];
// const soma = numeros.reduce((total, numero) => (total + numero));
// console.log('Soma dos números: ', soma);
// Apresentar o maior número do vetor com REDUCE
const maiorNumero = numeros.reduce(
  (maior, numero) => (maior > numero ? maior : numero),
  // return Math(maior, numero);
  100
);
// console.log('Maior número: ', maiorNumero);
// Concatenar os valores do array para formar uma frase
const palavras = [
  'Se',
  'você',
  'cansar',
  '😓,',
  'aprenda',
  'a',
  'descansar,',
  'e',
  'não',
  'a',
  'desitir!',
  '💚',
];

// console.log(palavras.join(' '));
const frase = palavras.reduce((frase, palavra) => `${frase} ${palavra}`, '');
// console.log(frase);
// Verificar quantas vezes cada nome se repete
// { 'Alexandre': 1, 'Adraina': 3,.....}
const nomes = [
  'Alexandre',
  'Adriana',
  'Matheus',
  'Adriana',
  'Marlene',
  'João',
  'Matheus',
  'João',
  'Adriana',
];

const nomesRepetidos = nomes.reduce((acc, curr) => {
  if (Object.keys(acc).includes(curr)) {
    acc[curr]++;
  } else {
    acc[curr] = 1;
  }
  return acc;
}, {});

// console.log(nomesRepetidos);

// Calcular o total de cervejas em estoque
const totalDeCervejasEmEstoque = cervejas.reduce((estoque, cerveja) => {
  return estoque + cerveja.valor * cerveja.estoque;
}, 0);

// console.log('O total de cervejas em estoque é: ', totalDeCervejasEmEstoque);

// Verificar qual é a cerveja mais cara em estoque
const cervejaMaisCara = cervejas.reduce((maisCara, cerveja) => {
  return maisCara.valor < cerveja.valor ? cerveja : maisCara;
});
// Usando operador ternário para deixar o código mais limpo e simples

console.log('A cerveja mais cara em estoque é:', cervejaMaisCara);
