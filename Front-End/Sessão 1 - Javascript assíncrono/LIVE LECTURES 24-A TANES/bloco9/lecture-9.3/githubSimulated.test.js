require('./fetchSimulator');
const { getGitHubUserInfos, getUserReposUrl } = require('./github');

const dadosComparacao = {
  name: 'Atanes - Trybe',
  company: 'Trybe',
  twitter: undefined,
  bio: 'Apaixonado pela educação e troca de conhecimento entre as pessoas! Um Tryber feliz por poder ajudar as pessoas a ganharem conhecimento na área de programação.',
  location: 'São Bernardo do Campo - SP',
};

describe('Testando github API', () => {
  test('com usuario Atanes-Trybe, deve retornar os dados desse usuário', async () => {
    expect.assertions(1);
    const respostaAPI = await getGitHubUserInfos('Atanes-Trybe');
    expect(respostaAPI).toEqual(dadosComparacao);
  });

  test('deve chamar a funcao fetch', async ()=>{
    expect.assertions(1);
    await getGitHubUserInfos('Atanes-Trybe');
    expect(fetch).toBeCalled();
  });

  test('deve chamar a funcao fetch com a url correta', async ()=>{
    expect.assertions(1);
    const user = 'Atanes-Trybe';
    const url = `https://api.github.com/users/${user}`;
    await getGitHubUserInfos('Atanes-Trybe');
    expect(fetch).toBeCalledWith(url);
  });

  test('com usuário inexistente retorna um erro com o texto Usuário inválido', async ()=>{
    try {
      expect.assertions(1);
      await getGitHubUserInfos('Atanes-Trybe');
    } catch (error) {
      expect(error).toEqual(new Error('Usuário inválido'));
    }
    
  })
});
