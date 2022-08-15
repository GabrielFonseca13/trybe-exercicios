// 1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:

const numbers = [19, 21, 30, 3, 45, 22, 15];

const verify3and5 = (number) => number % 3 === 0 && number % 5 === 0;

const findDivisibleBy3And5 = numbers.find(verify3and5);

console.log(findDivisibleBy3And5)
