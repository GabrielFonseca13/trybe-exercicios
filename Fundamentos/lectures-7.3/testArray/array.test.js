const myArray = require('./array')

describe('requisito 1', () => {
    it('verifica se o array reccebe 1,2,3,4,5 e retorna true', () => {
        expect(true).toEqual(myArray([1,2,3,4,5])); 
    });
});

describe('Requisito 2', () => {
    it(`verifica se a funçao recebe [1,2,'3',4,5] e retorna false`, () => {
        expect(false).toEqual(myArray([1,2,'3',4,5]));
    });
})

describe('Requisito 3', () => {
    it (`verifica se a função recebe um [' '] e retorna false`, () => {
        expect(false).toEqual(myArray([' ']));
    });
})