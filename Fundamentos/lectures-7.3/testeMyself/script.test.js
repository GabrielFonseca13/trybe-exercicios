const { expect } = require('expect');
const sum = require('./script');

test ('verificar se a soma de 1 e 2 é 3', () => {
    expect(sum(1,2)).toBe(3);
});