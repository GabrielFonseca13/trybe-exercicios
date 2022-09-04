const { printPointCoordinates } = require('./02-spread');
const points = [1.0, 2.2, -6.6, 3];
const otherPoints = [0.1, 3.5, -99.6];

describe('Testa a função printPointCoordinates', () => {
  test('Verifica se a saída da função está correta', () => {
    // expect(printPointCoordinates(1.0, 2.2, -6.6)).toBe(
    //   'Point coordinates are x = 1, y = 2.2 and z = -6.6'
    // );
    // expect(printPointCoordinates(0.1, 3.5, -99.6)).toBe(
    //   'Point coordinates are x = 0.1, y = 3.5 and z = -99.6'
    // );

    expect(printPointCoordinates(...points)).toBe(
      'Point coordinates are x = 1, y = 2.2 and z = -6.6'
    );
    expect(printPointCoordinates(...otherPoints)).toBe(
      'Point coordinates are x = 0.1, y = 3.5 and z = -99.6'
    );
  });
});
