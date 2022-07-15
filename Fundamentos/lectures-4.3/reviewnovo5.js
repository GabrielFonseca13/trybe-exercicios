// 1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

// declarar a variavel n que vai determinar os tamanho da base e da altura
// declarar a variavel que vai inserir o simbolo
// declarar a variavel que vai inserir a linha
// criar uma estrutura de repetição para que sejam inseridos os asteriscos de acordo com n e imprimir quando der 5
// criar outra estrutura de repetição para que o processo se repita n vezes.

let n = 3;
let symbol = '*';
let inputLine = '';

for (let index = 0; index < n; index += 1) {
    inputLine = inputLine + symbol 
} 
for (let index = 0; index < n; index += 1) {
    console.log(inputLine);
    
}