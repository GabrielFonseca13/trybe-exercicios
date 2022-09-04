const sum = (n1, n2) => n1 + n2;

const divisao = (n1, n2) => n1 / n2;

/**
 * Usando o conceito de TDD:
 * Implemente uma função `summationOf(number)` que recebe um número inteiro e retorna o seu somatório.
 *
 * Por exemplo:
 *
 * - `summationOf(1)` retorna 1: soma de 1 até 1 = 1
 * - `summationOf(3)` retorna 6: soma de 1 até 3 = 1 + 2 + 3 = 6
 * - `summationOf(5)` retorna 15: soma de 1 até 5 = 1 + 2 + 3 + 4 + 5 = 15
 */

const summationOf = (number) => {
  if (typeof number !== 'number') {
    throw new Error('Essa funçao só aceita numeros como parametro');
  }
  let summation = 0;
  for (let index = 0; index <= number; index += 1) {
    summation += index;
  }
  return summation;
};

// console.log(summationOf());
module.exports = { sum, summationOf, divisao };
