// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.

//informar o Array
// criar a função para receber o array e verificar o índice de maior valor
// //criar a estrutura para percorrer o array
// criar a variavel que armazena o maior valor
// criar a estrutura de comparação entre os valores
// retornar a posição

let arrayDeTeste = [2, 3, 6, 7, 10, 1];
positionBiggerNumber = 0;

function verificaIndiceMaiorValor(arrayDeTeste){
    for (let index = 1; index <= arrayDeTeste.length ; index += 1){
        if(arrayDeTeste[index] > arrayDeTeste[index + 1]){ 
        positionBiggerNumber = arrayDeTeste[index];
        } 
    }
    console.log(positionBiggerNumber);
    }