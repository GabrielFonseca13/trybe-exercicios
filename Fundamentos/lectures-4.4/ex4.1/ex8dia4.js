// 🚀 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.

// criar a função que recebe 3 parametros
// criar condição para retornar true se um dos 3 parametros for par
// cirar condição para retornar false se nenhum dos 3 for par

function verificaPar(num1, num2, num3){
    if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0){
        return true;
    } else {
        return false;
    }
}
console.log(verificaPar(1,3,8));