// 1. Imprimir números de 1 a 10.
const imprimeDez = () => {
for (let index = 1; index <=10; index +=1){
    console.log(index);
}
};
imprimeDez();

// 2. Imprimir os números impares menores que 100 

const listaImpar = num1 => {
    for (let index = 1; index < num1 ; index +=1 ){
      if (index % 2 !== 0){
        console.log(index);
      };
    };return `lista de ímpares de 1 a 100`;
};

console.log(listaImpar(100));

// 3. Imprimir a tabuada do número 8 

const tabuada = num1 => {
  for (let index = 1; index <= num1; index +=1) {
    console.log(` ${num1} X ${index} = ${num1 * index}`);  
  }
}
tabuada(12)

// 4. Imprimir todas as tabuadas do número 1 ao 10 

const tabuadasAteDez = () => {
  for (index = 1; index <= 10; index +=1){
    console.log(`### TABUADA DE ${index}`);
    for (let index2 = 1; index2 <= 10; index2 +=1) {
      console.log(` ${index} X ${index2} = ${index * index2}`);  
      }
    }
  };
tabuadasAteDez();

// 5. Soma dos números de 1 a 10 

const acumulator = () => {
  let sum = 0;
  for (let index = 1; index <= 10; index +=1) {
    sum += index;
  }
  return sum;
}
console.log(acumulator());

// 6 Calculado o fatorial de 10 

const calcFatorial = num1 => {
  let sum = 1
  for (let index = 2; index <= num1; index += 1){
    sum *= index;
  }
  return sum;
}
console.log(calcFatorial(10));

// 7. Criar uma função para calcular a porcentagem de um número 

const percent = (num, percent) => {
  let result = (num/100) * percent;
  return ` ${percent}% de ${num} é ${result}.`
}
console.log(percent(2500, 33));

// 8. Calcular a soma dos números impares maiores que 10 e menores que 30 

const calcSumOddsInterval = (numPartida, numFinal) => {
  let sumOdds = 0
  for (index = numPartida; index >= numPartida && index <= numFinal; index += 1){
    if (index % 2 !== 0) {
      sumOdds += index;
    }
  }
  return sumOdds
};
console.log(calcSumOddsInterval(10,30));

// 9. Criar uma função que converta uma temperatura de Celsius para Fahrenheit

const converteTemperatura = tempCelsius => {
  tempFahrenheit = (tempCelsius * 1.8) + 32;
  
  return ` ${tempCelsius}° Celsius equivalem a ${tempFahrenheit.toFixed(1)}° Fahrenheit;`
}
console.log(converteTemperatura(37));

// 10 . Calcular a soma dos números de um array 

const sumArrayNumbers = (array) => {
  let sum = 0;
  for (index = 0; index < array.length ; index += 1){
    sum += array[index];
  }
  return sum;
}
console.log(sumArrayNumbers([12, 25, 33, 10, 2, 49]));

// 11. Calcular a média de todos os números de um array

const calcMediaArray = (array) =>{
  sum = 0;
  for (let index = 0; index < array.length; index += 1) {
    sum += array[index];
  }
  return `A Média do Array é : ${(sum/array.length).toFixed(1)} `
}

console.log(calcMediaArray([12, 25, 33, 10, 2, 49]));


// 12. Criar uma função que receba como parâmetro um array de números e retorne um array
// contendo somente números positivos. 

const criaArrayPositive = (array) => {
  const arrayPositive = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 0) {
      arrayPositive.push(array[index]);      
    }
  }
  return arrayPositive;
}

console.log(criaArrayPositive([12, -25, 33, -10, 2, -49]));

// 13. Localizar o maior valor dentro de um array de números 

// 14. Calcular a soma de todos os dígitos de um número inteiro positivo 

// 15. Imprimir os 10 primeiros números da sequência de Fibonacci sem usar recursividade 

// 16.Criar uma função para imprimir os 10 primeiros números da sequência de Fibonacci usando
// recursividade 

// 17. Criar uma função que retorno um valor booleano informando se o número enviado como
// parâmetro é um número primo. 

// 18. Crie uma função que calcule a raiz quadrada de um número e retorne um número inteiro
// como resultado 

// 19. Retornar a maior string de um array 

// 20. Criar uma função que junte dois arrays e retorno o resultado como um novo array 

// 21. Implemente o algoritmo "bubble sort" para um array de números 

// 22. Contar a quantidade de palavras em um texto 

// 23. Criar uma função para inverter um array ""
