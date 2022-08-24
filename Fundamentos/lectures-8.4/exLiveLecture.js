const arrayDePalavras = [
    'sadasdasd',
    'llllllllllll',
    'adasdasdasd',
    'lllllllllll',
    '###########',
    'SDADASDASDASD'
];

const unificaArray = arrayDePalavras.reduce((frase, palavra) => {
    return `${frase} ${palavra}`
}, '');

console.log(arrayDePalavras.join(' '));

console.log(unificaArray);