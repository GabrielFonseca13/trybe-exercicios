/* Rest: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/rest_parameters
É uma sintaxe que permite a passagem, em um único parâmetro, de um número indefinido de valores. */

const { sumAll } = require('./03-rest');

describe('testa a função sumAll', () => {
  test('inserindo um ou mais números verificar se retorna a soma de todos eles', () => {
    expect(sumAll(1, 2)).toBe(3);
    expect(sumAll(1, 2, 3)).toBe(6);
    expect(sumAll(1, 2, 3, 4, 5)).toBe(15);
  });
});
