const { awesomeBooks } = require('./01-spread');

describe('Testa a função awesomeBooks', () => {
  test('Valida lista total de livros', () => {
    expect(awesomeBooks).toEqual([
      'It',
      'The Shining',
      'I, Robot',
      'Caves of Steel',
      'The End of Eternity',
    ]);
  });
});
