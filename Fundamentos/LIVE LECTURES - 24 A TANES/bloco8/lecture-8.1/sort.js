// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// O método sort() ordena os elementos do próprio array e retorna o array. A ordenação não é
// necessariamente estável. A ordenação padrão é de acordo com a  pontuação de código unicode.

// Ordenar o jogadores em ordem alfabética
const jogadores = [
  'Pelé',
  'Jairzinho',
  'Marta',
  'Formiga',
  'Hulk',
  'Juary',
  'Fábio',
  'Janderson',
  'Sócrates',
];

jogadores.sort();
console.log(jogadores);
jogadores.reverse();
console.log(jogadores);

// Como fazer a ordenação inversa do array de jogadores?

// Ordenar os números em ordem crescente
const numeros = [3, 5, 7, 12, 123, 55, 90, 0, 13, 11, 1000];
numeros.sort((n1, n2) => n2 - n1);
console.log(numeros);

// Ordenar os números em ordem decrescente
