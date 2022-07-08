//Declarar a variável
let fatorial = 10
//criar a estrutura de repetição
for (let index = 10; index > 1; index -= 1) {
// criar a condição
    console.log('Index: '+ index);
    console.log('Fatorial corrente: '+ fatorial);
    fatorial = fatorial * (index - 1)
    console.log('Fatorial atualizado: '+ fatorial);   
}
// imprimir o resultado.
console.log(fatorial);