// Para fixar ainda mais conceito de reduce, faça uma função que some todos os números pares do array:
// Copiar

// tente realizar a função sem vê-la. Tente criar uma usando reduce e filter, e outra apenas usando reduce.
// Solução usando filter e reduce:

// // #### FILTER E REDUCE ####
// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
// const getEven = numbers.filter((number) => number % 2 === 0).reduce((acc, curr) => acc + curr);
// // const sumEven = getEven(numbers).reduce((acc, curr) => acc + curr);
// console.log(getEven);
// // console.log(sumEven);

// #### REDUCE ####

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getEven = (acc, number) => ((number % 2 === 0) ? acc + number : acc);

const sumPairs = (array) => array.reduce(getEven,0);

console.log(sumPairs(numbers));