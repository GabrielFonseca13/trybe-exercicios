// 3- Considere o array de strings abaixo:
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

// copiar o array
// declarar uma variavel para armazenar a maior palavra
// declarar outra variavel para armazenar a menor palavra
// criar estrutura de repetiçao para percorrer o array

// comparar se é maior estrutura if
// comparar se é menor estrutura if
// imprimir a maior e a menor palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggestWord = array[0];
let smallestWord = array [0];

for (let index = 0; index < array.length; index +=1 ){
    if(array[index].length > biggestWord.length ){
        biggestWord = array[index]
    }
}
for (let index = 0; index < array.length; index += 1) {
    if (array[index].length < smallestWord.length) {
        smallestWord = array[index]       
    }
}
console.log(biggestWord);
console.log(smallestWord);
