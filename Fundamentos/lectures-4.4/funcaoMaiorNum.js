function maiorNum (primeiroNum, segundoNum){
    if (primeiroNum > segundoNum){
        return 'o primeiro número recebido: '+ primeiroNum + ' é maior que o segundo número recebido: '+ segundoNum +'.';
    } else if (primeiroNum < segundoNum) {
        return 'o segundo número recebido: '+ segundoNum + ' é maior que o primeiro número recebido: '+ primeiroNum +'.';
    } else {
        return 'Os números são iguais.'
    }
}
console.log(maiorNum(12 , 12));