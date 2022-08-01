// Crie uma função que receba uma frase e retorne a maior palavra.
// Exemplo:

const longestWord = (text) => {
    const textArray = text.split(" ");
    let biggestWord = textArray[0];
    console.log(textArray);
    console.log(biggestWord);
    for (let index = 1; index < textArray.length; index +=1) {
        if (textArray[index].length > biggestWord.length) {
            biggestWord = textArray[index];            
        };
        console.log(biggestWord);       
    }
    return biggestWord;
}

longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

