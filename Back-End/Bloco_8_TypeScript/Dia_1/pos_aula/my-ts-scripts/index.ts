const readlineIndex = require('readline-sync');

const scripts = [
  { name: 'Converter comprimento', script: './length' },
  { name: 'Converter massa', script: './mass' },
  { name: 'Converter capacidade', script: './capacity' },
  { name: 'Converter área', script: './area' },
  { name: 'Converter volume', script: './volume' },
];

const scriptNames = scripts.map((item) => item.name);

const choice = readlineIndex.keyInSelect(scriptNames, 'Escolha um número para executar o script de conversao de unidade');

require(scripts[choice].script);