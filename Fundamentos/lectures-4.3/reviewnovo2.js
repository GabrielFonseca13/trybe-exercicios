// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

// declarar a variavel com a palavra 
// criar uma variavel para armazenar a palavra invertida.
// criar uma estrutura de repetição que vai inverter a palavra.
// imprimir a variavel da palavra invertida;

let word = 'maluquice';
let reverseWord = '';

for (let index = 0; index < word.length; index +=1 ) {
    reverseWord += word[word.length -1 - index]    
}
console.log(reverseWord);
