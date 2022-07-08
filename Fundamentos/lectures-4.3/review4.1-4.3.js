// declarar a variave lnumPrim
// criar estrutura de repetição para o numero dividir por todos os numeros até 2
// criar contador de numero de vezes que o resto da dic = 0
// criar a variavel numero primo mais alto
// imprimir a variavel numero primo mais alto
let biggestPrimeNumber = 0;
for (let index = 2; index <= 50; index+= 1) {
    let numPrim = true;
    console.log('laço 1 index: ' + index);
    for (let indexDiv = 2; indexDiv < index; indexDiv += 1) {
        console.log('laço 2 index: '+ index)
        console.log('laço 2 indexDiv: '+ indexDiv);
        if (index % indexDiv === 0) {
            numPrim = false            
        }
    }
    if (numPrim) {
        biggestPrimeNumber = index
        console.log('atual maior primo: '+ biggestPrimeNumber);
    }
}

console.log('maior primo de 2 a 50: '+ biggestPrimeNumber);