const { getGitHubUserInfos, getUserReposUrl } = require('./github');

describe('Quando chamada a função getGitHubUserInfos', () => {
  test('deve retornar um objeto com name, company, twitter, bio, location', async () => {
    const retornoAPI = await getGitHubUserInfos('Atanes-Trybe');
    const dadosComparacao = {
      name: 'Atanes - Trybe',
      company: 'Trybe',
      twitter: 'aatanes',
      bio: 'Apaixonado pela educação e troca de conhecimento entre as pessoas! Um Tryber feliz por poder ajudar as pessoas a ganharem conhecimento na área de programação.',
      location: 'São Bernardo do Campo - SP',
    };
    expect(retornoAPI).toEqual(dadosComparacao);
  });
});
