// ########### SPREAD OPERATOR #############

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Kiwi', 'Mango', 'Avocado'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Honey', 'Sugar', 'Milk'];

const fruitSalad = (fruit, additional) => {
  return [...fruit,...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));