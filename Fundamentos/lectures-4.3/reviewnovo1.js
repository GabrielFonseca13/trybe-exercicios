// crie um algoritmo que retorne o fatorial de 10.
// declarar a constante q será 10.
// declarar uma variavel que vai acumular o resultado das multiplicações.
// criar uma estrutura de repetição que percorrerá de 10 pra baixo até o 1.
// imprimir o resultado.

const fatorial = 10;
let result = fatorial

for (let index = fatorial; index > 1; index -=1 ) {
    result = result * (index - 1)
    console.log(result);
}
    
    
