// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Manga', 'Banana', 'Melancia'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite Condensado', 'Granola', 'Mel'];

const fruitSalad = (fruit, additional) => {
  const saladaDeFrutas = [...fruit, ...additional];
    return saladaDeFrutas;
};

console.log(fruitSalad(specialFruit, additionalItens));