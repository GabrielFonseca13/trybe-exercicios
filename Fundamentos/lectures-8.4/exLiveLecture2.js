const nomes = [
    'jose',
    'aline',
    'jose',
    'aline',
    'Matias',
    'jose',
    'aline',
    'jose',
    'jose',
];

const countNamesRepeat = nomes.reduce((novoObjeto, nome) => {
    if(Object.keys(novoObjeto).includes(nome)){
        novoObjeto[nome] += 1;
    } else {
        novoObjeto[nome] = 1;
    }
    return novoObjeto
}, {});

console.log(countNamesRepeat);