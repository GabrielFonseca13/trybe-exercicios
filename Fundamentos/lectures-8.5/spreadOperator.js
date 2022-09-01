// ########## SPREAD OPERATOR ################

const carros = ['Gol','Palio','HB20'];
const motos = ['Biz', 'Hornet'];

const veiculos = [...motos, ...carros];

console.log(veiculos);

// ########## SPREAD OPERATOR COM OBJETOS ################

const pessoa = {
    nome: 'Gabriel',
    idade: 29,
    cidade: 'Belo Horizonte',
}

const conhecimentosTrybe = {
    softSkill: true,
    hardSkill: true,
    trabalho: true,
}

const pessoaTryber = {
    ...pessoa,
    ...conhecimentosTrybe,
    esporte: 'Futevolei',
    Musica: 'Pagode',
}

console.log(pessoaTryber);

// ########### PARA FIXAR - SPREAD OPERATOR #############

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Kiwi', 'Mango', 'Avocado'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Honey', 'Sugar', 'Milk'];

const fruitSalad = (fruit, additional) => {
  return [...fruit,...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));
