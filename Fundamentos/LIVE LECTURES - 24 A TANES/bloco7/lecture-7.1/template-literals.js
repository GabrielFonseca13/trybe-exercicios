const to = `Ana Braga`;
const value = 22;

// const email =
// "Olá " + to + "\n" +
// "O valor da sua cobrança é de R$ " + value + "!\n" +
// "Esta é uma mensagem automática.";

// console.log(email);

// Usando Template Literals para obter o mesmo resultado

const emailLiterals = (para, valor) => {
  return `Olá ${para} 
O valor da sua cobrança é de R$ ${valor}!
Esta é uma mensagem automática.`;
};

console.log(emailLiterals('Isabela', 500));

// Mais um exemplo, imprimir no console uma saida do tipo 'Alexandre tem 51 anos de idade!!''
// sendo o nome e a idade variaveis.

let nome = 'Alexandre';
let idade = 51;

console.log(`${nome} tem ${idade} anos de idade!!`);

// Posso fazer uma operação matemática dentro do template literals?
console.log(`O resultado da divisão de 15 por 3 é: ${15 / 3}`);
