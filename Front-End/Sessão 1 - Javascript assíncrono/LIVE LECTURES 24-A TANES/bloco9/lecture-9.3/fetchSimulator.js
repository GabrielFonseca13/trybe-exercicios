const VALID_USERNAME = 'Atanes-Trybe';
const VALID_URL = `https://api.github.com/users/${VALID_USERNAME}`;

const data = {
  name: 'Atanes - Trybe',
  company: 'Trybe',
  twitter: undefined,
  bio: 'Apaixonado pela educação e troca de conhecimento entre as pessoas! Um Tryber feliz por poder ajudar as pessoas a ganharem conhecimento na área de programação.',
  location: 'São Bernardo do Campo - SP',
};

const fetchSimulator = (url) => {
  if (!url || url !== VALID_URL) {
    return Promise.reject(new Error('Usuário inválido'));
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        json: () => Promise.resolve(data),
      });
    }, 200);
  });
};

global.fetch = jest.fn(fetchSimulator);
afterEach(jest.clearAllMocks);

module.exports = fetchSimulator;
