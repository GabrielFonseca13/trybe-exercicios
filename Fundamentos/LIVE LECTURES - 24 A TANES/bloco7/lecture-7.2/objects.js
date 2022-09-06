// https://www.w3schools.com/js/js_objects.asp
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object
// https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy
// https://blog.bitsrc.io/shallow-copy-and-deep-copy-in-javascript-d0ca570cd4cf

// Criando objetos em JavaScript
const proprietario = {};
const novoObjetoVazio = new Object();

// Alterando o objeto proprietario incluindo chaves e valores.

proprietario.nome = 'Arnaldo Jabor';
proprietario['cpf'] = '123.768.908-01';
// proprietario.name = 'Robson';

// console.log(proprietario);

// Para excluir uma propriedade de um objeto você pode usar o delete
// delete proprietario.name;
// console.log(proprietario);

proprietario.nome = 'Carlos Prado';
// console.log(proprietario);

const veiculo = {
  marca: 'Ford',
  modelo: 'Fiesta',
  anoFabricacao: 2010,
}

// console.log(typeof proprietario, proprietario);
// console.log(typeof novoObjetoVazio, novoObjetoVazio);
// console.log(typeof veiculo, veiculo);

// console.log(veiculo.marca);
// console.log(veiculo['modelo']);

// Como podemos 'pegar' só as chaves de cada propriedade do objeto? Object.keys()
const chaves = Object.keys(veiculo);
// console.log(chaves);
// for(let chave of chaves){
//   console.log(veiculo[chave]);
// }

// Verificar se o objeto possui uma determinada chave. Object.keys().includes()
// console.log(Object.keys(veiculo).includes('marca'));

// Como podemos 'pegar' só os valores de cada propriedade do objeto?  Object.values()
veiculo.placa = 'NXY 1010';
const valores = Object.values(veiculo);
const temPlaca = Object.keys(veiculo).includes('placa') ? 'Sim' : 'Não';
// console.log(`O objeto veiculo possui uma chave com o nome placa? ${temPlaca}`);
// console.log(valores);

// for(let valor of valores){
//   console.log(`Valor: ${valor}`);
// }

// Como pegar as entradas 'chaves e valores' de cada propriedade do objeto? Object.entries
const entradas = Object.entries(veiculo);
// console.log(entradas);

// for(let index = 0 ; index < entradas.length; index += 1){
//   console.log(entradas[index][1]);
// }

// Obs.: O Comando Object.entries() vai retornar um array com outros arrays
// internos para cada 'par' de 'chave/valor' do objeto.
// [
//   [ 'marca', 'Ford' ],
//   [ 'modelo', 'Fiesta' ],
//   [ 'anoFabricacao', 2010 ]
// ]

// Objetos com propriedades que são outros objetos (JSON traz muitas estruturas
// desse tipo) Exemplo: https://pokeapi.co/api/v2/pokemon/pikachu


// Como podemos copiar um objeto?
// Existem algumas formas diferentes:

// Cópia direta
// const veiculo2 = veiculo;
// console.log(veiculo, veiculo2);
// veiculo.anoFabricacao = 2000;
// console.log(veiculo, veiculo2);

// Copiando corretamente com Object.assign(target, source)
// const veiculo2 = {};
// const veiculo2 = Object.assign({}, veiculo);
// veiculo.anoFabricacao = 2000;
// console.log(veiculo, veiculo2);

// Usando Object.assign() para copiar o objeto registroDetram para dentro do objeto
// veiculo;
const registroDetram = {
  proprietario: { nome: 'Márcia Maria de Jesus', cpf: '123.456.789-01' },
  placa: 'POL 4123',
  chassis: 'BWD0123711V002',
};
console.log(veiculo);
Object.assign(veiculo, registroDetram);
console.log(veiculo);

// Problema de copia - shallow copy (cópia rasa)
registroDetram.proprietario.nome = 'Atanes';
console.log(veiculo);