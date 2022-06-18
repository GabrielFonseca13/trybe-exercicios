//declarar as variáveis
let fatorial = 1

//criar um loop para percorrer os números decrescendo
for(let index = 10; index > 0; index -= 1){
    fatorial *= index;
}
//imprimir o resultado;
console.log('o resultado da Fatoracao é: ', fatorial);