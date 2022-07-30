// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5.
// Valor esperado no retorno da função: 1+2+3+4+5 = 15.

// criar a função
// declarar a variavel n
// declarar a variavel de soma
// criar a estrutura de repetição para somar até o n
// retornar o valor somado

function somatorium (n){
    let sum = 0
    for (let index = 0; index <= n; index +=1) {
        sum += index;
    }
    return sum;
}
console.log(somatorium(11));