const { sum, summationOf } = require('./script');

describe('Testes para validar a função sum', () => {
  test('Verificar se sum(1,2) retorna 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('Verificar se sum(5.1, 6.55) retorna 11.65', () => {
    expect(sum(5.1, 6.55)).toBeCloseTo(11.65);
  });

  it('Verificar se sum(0,0) retorna 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
});

describe('Testes relativos a funçao summationOf', () => {
  test('Verificar se summationOf é uma funçao', () => {
    expect(typeof summationOf).toBe('function');
  });
  test('summationOf(1)` retorna 1: soma de 1 até 1 = 1', () => {
    expect(summationOf(1)).toBe(1);
  });
  test('summationOf(3)` retorna 6: soma de 1 até 3 = 1 + 2 + 3 = 6', () => {
    expect(summationOf(3)).toBe(6);
  });
  it('summationOf(5)` retorna 15: soma de 1 até 5 = 1 + 2 + 3 + 4 + 5 = 15', () => {
    expect(summationOf(5)).toBe(15);
  });
  it('summationOf(10)` retorna 55: soma de 1 até 10 = 1 + 2 + 3 + 4 + 5 = 55', () => {
    expect(summationOf(10)).toBe(55);
  });
  it(`summationOf('') retorna erro`, () => {
    expect(() => summationOf('3')).toThrow('Essa funçao só aceita numeros como parametro');
  });
});
