// Criar funções que retornem uma mensagem de saudação, por exemplo: Olá pessoa, tudo bem com você?
const saudacao = (nome, callback) => {
  // let nome = 'Michel';
  return callback(nome);
}

const saudacaoFormal = (nome) => {
  return `Olá ${nome}, como você está, tudo bem?`
}

const saudacaoTrybe = (nome) => {
  return `Olá Tryber ${nome}, Bem vindo ao sistema`;
}

const saudacaoNeutra = () => {
  return `E ai mano!!`;
}

console.log(saudacao('Leticia', saudacaoNeutra));
// console.log(saudacaoFormal('Leticia'));
// console.log(saudacaoTrybe('Thiago'));


// const pessoa = {
//   nome: 'Atanes',
//   idade: 51,
//   saudacao: (nome) => {
//     `E ai galera, tudo bem?`;
//   }
// }

// pessoa.saudacao('Ebraim');
