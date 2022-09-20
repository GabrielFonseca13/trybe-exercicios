// Este array simula uma coleção em um banco de dados não-relacional.

const db = [
  {
    id: 123,
    name: 'Carla Perez',
    favoriteFood: 'maça do amor',
    greeting: 'Oi galera!',
  },
  {
    id: 321,
    name: 'José Rodrigues',
    favoriteFood: 'feijoada',
    greeting: 'Salve meu povo!',
  },
  {
    id: 404,
    name: 'Marlene Dias',
    favoriteFood: null,
    greeting: 'Olá.',
  },
  {
    id: 113,
    name: 'Alberto Valentin',
    favoriteFood: 'lasanha',
    greeting: 'Beleza pessoal!',
  },
];

// Esta variável abaixo, juntamente com as duas funções, hackTheDb() e restartDb() permitem controlar a simulação de uma falha.

// shouldFail = false deixa os dados sem falha;
// shouldFail = true deixa os dados com falha;
let shouldFail = false;

// Função que simula falha no acesso aos dados
function disconnectDb() {
  shouldFail = true;
}

// Função que normaliza o acesso aos dados
function connectDb() {
  shouldFail = false;
}

// A função findOne simula uma pesquisa no db.
function findOne(filter, callback) {
  setTimeout(() => {
    if (shouldFail) {
      return callback('Erro: Falha no acesso ao banco de dados!', null);
    }

    const queryResult = db.find(filter);

    return callback(null, queryResult);
  }, 300);
}

// A função createPresentationMessage possibilita a montagem de uma string a partir da pessoa usuária recuperada do "db".

function createPresentationMessage(filter, callback) {
  findOne(filter, (err, result) => {
    if (err) {
      return callback(err, null);
    }

    const { greeting, name, favoriteFood } = result;

    const greetingString = `${greeting} Meu nome é ${name} e minha comida favorita é ${favoriteFood}.`;

    return callback(null, greetingString);
  });
}

function retorno(erro, mensagem) {
  if (mensagem) {
    console.log(mensagem);
  } else {
    console.log(erro);
  }
}
disconnectDb();
createPresentationMessage((element) => element.name === 'Alberto Valentin', retorno);

module.exports = {
  createPresentationMessage,
  disconnectDb,
  connectDb,
};
