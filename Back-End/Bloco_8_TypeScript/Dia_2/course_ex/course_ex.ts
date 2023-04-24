// 1 - Crie um type para um objeto que represente um pássaro.


type Bird = {
  name: string;
  color: string;
  location: string;
  size: number;
  weigh: number;
};

function showBirdDetails(birdDetails: Bird) {
  return console.log(`O nome do pássaro é : ${birdDetails.name}
  sua cor é ${birdDetails.color},
  ele é encontrado no país: ${birdDetails.location}
  O tamanho médio é de ${birdDetails.size} Cm's
  e pesa em média: ${birdDetails.weigh} gramas`);
};

const birdExample = {
  name: 'Passaro de fogo',
  color: 'vermelho e amarelo',
  location: 'Brasil',
  size: 42,
  weigh: 270,
};

showBirdDetails(birdExample);

// 2 - Crie um type que represente uma função que recebe dois valores numéricos e retorne a soma deles.
type Sum = {
  num1: number,
  num2: number,
}

function sumEx2(num: Sum) {
  const result = num.num1 + num.num2;
  console.log('EXERCICIO 2');
  return console.log(`soma com arrays - Resultado: ${result} `);
}

const numSoma = {
  num1: 20,
  num2: 30
};

sumEx2(numSoma);


// 3 - Crie um type para um objeto que represente um endereço.

type Address = {
  street: string,
  number: number,
  city: string
}

function showAddress(address: Address) {
  console.log('EXERCICIO 3');
  return console.log(`O Endereço cadastrado é: ${address.street}
  Número: ${address.number}, na cidade: ${address.city}`);
}

const addressTest = {
  street: 'Rua Do amendoim',
  number: 123,
  city: 'Belo HOrizonte',
}

showAddress(addressTest);