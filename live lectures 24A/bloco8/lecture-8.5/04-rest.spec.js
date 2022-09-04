const { formatDate, dateInfo } = require('./04-rest');

describe('testa a função formatDate', () => {
  test('ao inserir os dados de uma data válida retorna a data formatada em DD/MM/YYYY - HH:MM:SS', () => {
    expect(formatDate(...dateInfo)).toBe('1/2/1988 - 20:01:13');
  });
});
