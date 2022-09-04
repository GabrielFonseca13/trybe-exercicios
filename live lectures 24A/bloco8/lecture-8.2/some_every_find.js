// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/some

// O método some() testa se ao menos um dos elementos no array passa no teste implementado
// pela função atribuída e retorna um valor true ou false.

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// O método every() testa se todos os elementos do array passam pelo teste implementado
// pela função fornecida e retorna um valor true ou false.

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find

// O método find() retorna o valor do primeiro elemento do array que satisfizer a função de
// teste provida. Caso contrario, undefined é retornado.

// Verificar se pelo menos uma pessoa da lista abaixo sabe dirigir

const pessoas = [
  { nome: 'Robert', sobreNome: 'De Niro', dirige: true },
  { nome: 'Michelle', sobreNome: 'Pfeiffer', dirige: true },
  { nome: 'Will', sobreNome: 'Smith', dirige: false },
  { nome: 'Mariah', sobreNome: 'Carey', dirige: true },
  { nome: 'Lady', sobreNome: 'Gaga', dirige: true },
  { nome: 'Justin', sobreNome: 'Bieber', dirige: false },
];

pessoas.every((pessoa) => pessoa.dirige === true);

// Usando FOR OF
// let temPessoaQueSabeDirigir = false;
// for (let pessoa of pessoas) {
//   if (pessoa.dirige === true) {
//     temPessoaQueSabeDirigir = true;
//     break;
//   }
// }

// Usando o SOME
let temPessoaQueSabeDirigir = pessoas.some((pessoa) => pessoa.dirige === true);

console.log('Alguém sabe dirigir:', temPessoaQueSabeDirigir);
// Usando o OPERADOR TERNÁRIO para fazer a saída do resultado
let resposta = temPessoaQueSabeDirigir
  ? 'Pelo menos uma das pessoas sabe dirigir'
  : 'Não temos nenhuma pessoa que sabe dirigir';
console.log(resposta);

// Usando o EVERY para verificar se todas as pessoas sabem dirigir
const todasAsPessoasDirigem = pessoas.every((pessoa) => pessoa.dirige === true);
console.log(`Todas as pessoas da lista dirigem? ${todasAsPessoasDirigem}`);

// Pegar as informações da 'primeira' pessoa que não sabe dirigir
// Usando o FIND
const pessoaQueNaoSabeDirigir = pessoas.find((pessoa) => pessoa.dirige === false);

console.table(pessoaQueNaoSabeDirigir);

// ----------------------- Conteúdo do Course ------------------------
// Para fixar
// 1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false , use some ;

const arrayNomes = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna', 'Lucas'];

const vetorApelidos = ['Gama', 'Cris', 'Alvim', 'Pedrão'];

const hasName = (array, nome) => array.some((name) => name === nome);
arrayNomes.push('Rodrigo');

console.log(hasName(arrayNomes, 'Rodrigo'));

console.log(hasName(vetorApelidos, 'Alvim'));

// 2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false , use every ;

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = () => {};

console.log(verifyAges(people, 18));
