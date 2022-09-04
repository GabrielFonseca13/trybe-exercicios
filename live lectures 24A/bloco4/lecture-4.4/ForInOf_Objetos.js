// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String

// Imprimir todos os números pares entre 0 e 100 usando FOR Tradicional
// Obs.: Nesse caso não é possivel usar o i++
// for (let index = 2; index <= 100; index += 2) {
//   console.log(index);
// }

// Decompor uma string e gerar um array com suas palavras
let arquivoTexto = 'Rodrigo?Fabiana?Arthur?Joussemar?Pétala';
let arrayNomes = arquivoTexto.split('?');
// console.log(arrayNomes);

// let novaString = '';

// Como pegar o maior numero de um array de forma rápida (uma das soluções possiveis!!)
// let numeros = [3, 7, 13, 9, 100, 145, 123, 3];

// let maiorNumero = Math.max.apply(null, numeros);

// console.log(maiorNumero);

// for(numero of numeros){
//   console.log(numero * 3);
// }

// O FOR OF nos permite 'caminhar' por todos os elementos do array, do primeiro até o ultimo, sempre nessa sequencia e tem como resposta sempre o valor de cada posição do array
// for (let nome of arrayNomes) {
//   novaString += nome + '%';
// }
// console.log(novaString);

// for(numero of numeros){
//   console.log(numero * 3);
// }
// // Posso percorrer uma string com o FOR OF?
// let senha = 'Robot@2123';

// for (let letra of senha) {
//   console.log(letra);
// }

// O FOR IN nos permite caminhar por todos os elementos do array, do primeiro até o ultimo, sempre nessa sequencia e podemos pegar o indice e o valor de cada posição sem maiores problemas

// for (let n in arrayNomes) {
//   console.log('Index:', n, 'Valor do elemento:', arrayNomes[n]);
// }

// Declarando e trabalhando objetos
let pessoa = {
  nome: 'Alexandre Atanes de Jesus',
  idade: 51,
  localNascimento: 'Santos',
  apelido: 'Athanos',
};

// FOR IN para caminhar por todas as chaves e valores do objeto
for (let i in pessoa) {
  console.log('Chave: ', i, 'Valor:', pessoa[i]);
}

console.log(pessoa.apelido);
console.log(pessoa['apelido']);
// FOR OF não funciona para caminhar na estrutura de um objeto
// for(chave of pessoa){
//   console.log(chave);
// }

// Incluir mais uma propriedade para o objeto
pessoa.endereco = {
  logardouro: 'Rua Avaré',
  numero: 123
}

console.log(pessoa);

//pessoa.endereco = endereco;

// Acessando o objeto e suas propriedades de forma direta através do DOT (.) NOTATION ou com [nome propriedade]
