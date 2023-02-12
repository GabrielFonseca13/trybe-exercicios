const fs = require('fs').promises;
const { join } = require('path');
const path = '/files/cacauTrybeFile.json';

const readCacauTrybeFile = async () => {
  const path = '/files/cacauTrybeFile.json';
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const writeCacauTrybeFile = async (content) => {
  try {
    const completePath = join(__dirname, path);
    await fs.writeFile(completePath, JSON.stringify(content));
  } catch (error) {
    console.error('Erro ao salver o arquivo', error.message);
    return null;
  }
};

const updateChocolate = async (id, update) => {
  const cacauTrybe = await readCacauTrybeFile();
  const chocolateToUpdate = cacauTrybe.chocolates.find(
    (chocolate) => chocolate.id === id
  );

  if (chocolateToUpdate) {
    cacauTrybe.chocolates = cacauTrybe.chocolates.map((chocolate) => {
      if (chocolate.id === id) return { ...chocolate, ...update };
      return chocolate;
    });
    await writeCacauTrybeFile(cacauTrybe);
    return { ...chocolateToUpdate, ...update };
  }

  return false;
};

const getAllChocolates = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates;
};

const getChocolateById = async (id) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates.find((chocolate) => chocolate.id === id);
};

const getChocolatesByBrand = async (brandId) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates.filter(
    (chocolate) => (chocolate.brandId = brandId)
  );
};

const findChocolateByName = async (query) => {
  const cacauTrybe = await readCacauTrybeFile();
  const QueriedChocolates = cacauTrybe.chocolates.filter((chocolate) =>
    chocolate.name.toLowerCase().includes(query.toLowerCase())
  );
  if (QueriedChocolates.length === 0) return [];
  return QueriedChocolates;
};

module.exports = {
  getAllChocolates,
  getChocolateById,
  getChocolatesByBrand,
  findChocolateByName,
  updateChocolate,
};
