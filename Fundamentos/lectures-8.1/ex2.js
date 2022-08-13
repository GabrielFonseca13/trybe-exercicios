// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const generateRandomNumber = () => {
    let randomNumber = (Math.random() * 5).toFixed(0);
    return randomNumber;
}
// console.log(generateRandomNumber());

const generateBetNumber = () => {
    let betNumber = (Math.random() * 5).toFixed(0);
    return betNumber;
}
// console.log(generateBetNumber());

const checkNumber = (callback1, callback2) => {
    betNumber = callback2();
    randomNumber = callback1();
    
    if (betNumber === randomNumber){
        return `Número apostado: ${betNumber}
Número Sorteado: ${randomNumber}
Parabéns você ganhou !!!`;
    } else {
        return `Número apostado: ${betNumber}
Número Sorteado: ${randomNumber}
Tente novamente !!! `;
    }
};

console.log(checkNumber(generateRandomNumber,generateBetNumber));