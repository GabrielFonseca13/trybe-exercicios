// Crie uma função que receba uma frase e retorne a maior palavra.
// Exemplo:

const longestWord = (text) => {
    const textArray = text.split(" ");
    let biggestWord = textArray[0];
    // console.log(textArray);
    // console.log(biggestWord);
    for (let index = 1; index < textArray.length; index +=1) {
        if (textArray[index].length > biggestWord.length) {
            biggestWord = textArray[index];            
        };
        // console.log(biggestWord);       
    }
    return biggestWord;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu')); // retorna 'aconteceu'


// alternativa para reduzir todo o código acima.
// const longestWord = (text) => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

// console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));

