const { utimes } = require('fs');

const fs = require('fs').promises;
const SIMPSON_JSON_PATH = './simpsons.json';
const UTF_8 = 'utf-8';

const readAll = async () => {
  const fileContent = await fs.readFile(SIMPSON_JSON_PATH, UTF_8);
  const convertFile = JSON.parse(fileContent);
  const renderChars = convertFile.map((char) => `${char.id} - ${char.name}`);
  renderChars.forEach((char) => console.log(char)); 
}

const searchSimpsonById = async (id) => {
  const fileContent = await fs.readFile(SIMPSON_JSON_PATH, UTF_8);
  const convertFile = JSON.parse(fileContent);
  const choosedSimpson = convertFile.find((simpson) => Number(simpson.id) === id);
  if(!choosedSimpson) {
    throw new Error('id não encontrado”');
  } else {
  console.log(choosedSimpson)
  }
};


const filterSimpson = async () => {
  const fileContent = await fs.readFile(SIMPSON_JSON_PATH, UTF_8);
  const convertFile = JSON.parse(fileContent);
  const filteredSimpson = convertFile.filter((simpson) => simpson.id !== '6' && simpson.id !=='10');
  await fs.writeFile(SIMPSON_JSON_PATH, JSON.stringify(filteredSimpson));
}

// Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, 
// contendo as personagens com id de 1 a 4.
const createNewJson = async () => {
  const fileContent = await fs.readFile(SIMPSON_JSON_PATH, UTF_8);
  const convertFile = JSON.parse(fileContent);
  const familyIds = [1,2,3,4]
  const simpsonFamily = convertFile.filter((simpson) => familyIds.includes(Number(simpson.id)));
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonFamily));
}

// E - Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.

const includesNelson = async() => {
  const fileContent = await fs.readFile('./simpsonFamily.json', UTF_8);
  const convertFile = JSON.parse(fileContent);
  convertFile.push({id: '8', name: 'Nelson Muntz'});
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(convertFile));
};

// Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no
// arquivo simpsonFamily.json.

const updateSimpsonFamily = async() => {
  const fileContent = await fs.readFile('./simpsonFamily.json', UTF_8);
  const simpsonFamily = JSON.parse(fileContent);
  const removeNelson = simpsonFamily.filter((simpson) => simpson.id !== '8')
  removeNelson.push({id:'5',name:'Maggie Simpson'});
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(removeNelson));
}

const main = () => {
  // readAll();
  // searchSimpsonById(15);
  // filterSimpson();
  // createNewJson();
  // includesNelson();
  updateSimpsonFamily();
}

main();












// const fs = require('fs').promises;


// const readAll = async () => {
//   const fileContent = await fs.readFile(jsonPath, 'utf-8');
//   const simpsons = JSON.parse(fileContent);
//   const characters = simpsons.map(({id, name}) => `${id} - ${name}`);
//   characters.forEach((character) => console.log(character));
// };


// const main = async () => {
//   await readAll();
// };

// main();

// const renderChar = (charList) => {
//   const allCharacteres = []
//   const allChar = charList.map((char) => {
//     const charId = char.id;
//     const charName = char.name;
//     allCharacteres = [...allChar, {"id": charId, "name": charName}];
//   })
//   return allCharacteres
// };

// renderChar()