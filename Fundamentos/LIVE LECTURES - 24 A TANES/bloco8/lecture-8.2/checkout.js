const itens = [15, 20, 10, 10, 5];

// Desconto de 20 reais;
const desconto20Reais = () => 20;
console.log(desconto20Reais(1000));
// desconto de 20 por cento;
const desconto20PorCento = (total) => total * 0.2;

const desconto40PorCento = (total) => total * 0.4;

const checkout = (itens) => {
  let total = 0;
  // Trocar por forEach
  for (const item of itens) {
    total += item;
  }
  total -= callback(total); // Aplicar desconto
  return total;
};
// console.log('Valor total da compra com desconto:', checkout(itens));
console.log('Valor total da compra com desconto:', checkout(itens, desconto40PorCento));

// Como aplicar descontos variados na função checkout, por exemplo:


