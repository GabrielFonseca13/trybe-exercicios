// meu jogo
let gameGabriel = [10, 23, 35, 13, 7, 25];
// console.log('números escolhidos: ', gameGabriel);

// números sorteados

let number1 = Math.floor(Math.random() * 61);
let number2 = Math.floor(Math.random() * 61);
let number3 = Math.floor(Math.random() * 61);
let number4 = Math.floor(Math.random() * 61);
let number5 = Math.floor(Math.random() * 61);
let number6 = Math.floor(Math.random() * 61);

let megasenaNumbers = [number1, number2, number3, number4, number5, number6];
// console.log('Números sortedosenaNumbers);

let numeroDeAcertos = 0;

for (let index = 0; index < gameGabriel.length; index += 1) {
  let numeroApostado = gameGabriel[index];
  // console.log("Número apostado: ", gameGabriel[index]);

  for (let gameIndex = 0; gameIndex < megasenaNumbers.length; gameIndex += 1) {
    let numeroSorteado = megasenaNumbers[gameIndex]
    // console.log("Números SorteadosenaNumbers[gameIndex]);
    // console.log(numeroApostado , numeroSorteado)
    if (numeroApostado === numeroSorteado){
      numeroDeAcertos += 1 
    };
  };
};
console.log(gameGabriel);
console.log(megasenaNumbers);

console.log('o número de acertos foi: ', numeroDeAcertos);