// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.

// criar função com 3 parametros
// criar condição para verificar se é ímpar
// retornar true ou false de acordo com a condição

function verificaImpar(num1, num2, num3){
    if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0){
        return true;
    } else {
        return false;
    }
}
console.log(verificaImpar(1,4,8));