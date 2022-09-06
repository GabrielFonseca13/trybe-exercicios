/* Parâmetros Predefinidos: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Default_parameters
Os parâmetros predefinidos - default params - de uma função permitem que parâmetros regulares sejam inicializados com com valores iniciais caso undefined ou nenhum valor seja passado. */

//Sem default parameters
const multiply = (number, factor = 10) => {
  return number * factor;
};


// Com default Parameters

describe('testa a função multiply', () => {
  test('inserindo dois valores, retorna a multiplicação entre eles', () => {
    expect(multiply(8)).toBe(80);
    expect(multiply(8, 2)).toBe(16);
    expect(multiply(8, 3)).toBe(24);
    expect(multiply(8, -1)).toBe(-8);
  });
});
