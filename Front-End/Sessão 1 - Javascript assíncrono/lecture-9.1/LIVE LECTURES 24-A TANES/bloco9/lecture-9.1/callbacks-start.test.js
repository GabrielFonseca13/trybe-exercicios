const { describe, expect, it, beforeEach } = require('@jest/globals');
const { createPresentationMessage, disconnectDb, connectDb } = require('./callbacks-start');

describe('A função createPresentationMessage', () => {
  beforeEach(() => connectDb());

  it('retorna corretamente a string para José Rodrigues', (done) => {
    const expectedString =
      'Salve meu povo! Meu nome é José Rodrigues e minha comida favorita é feijoada.';
    function callback(erro, mensagem) {
      if (mensagem) {
        expect(mensagem).toBe(expectedString);
        done();
      }
    }
    createPresentationMessage((pessoa) => pessoa.name === 'José Rodrigues', callback);
  });

  it('retorna erro quando falha o acesso ao banco de dados', (done) => {
    const expectedError = 'Erro: Falha no acesso ao banco de dados!';
    disconnectDb();
    function callback(erro, mensagem) {
      if (erro) {
        expect(erro).toBe(expectedError);
        done();
      }
    }
    createPresentationMessage((pessoa) => pessoa.name === 'Xuxa', callback);
  });

  it('retorna corretamente a string para Carla Perez', (done) => {
    const expectedString =
      'Oi galera! Meu nome é Carla Perez e minha comida favorita é maça do amor.';
    function callback(erro, mensagem) {
      if (mensagem) {
        expect(mensagem).toBe(expectedString);
        done();
      }
    }
    createPresentationMessage((pessoa) => pessoa.name === 'Carla Perez', callback);
  });
});
