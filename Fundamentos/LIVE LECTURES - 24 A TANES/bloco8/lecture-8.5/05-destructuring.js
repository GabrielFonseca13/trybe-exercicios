/* Atribuição via desestruturação (destructuring assignment): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
A sintaxe de atribuição via desestruturação (destructuring assignment) é uma expressão JavaScript que possibilita extrair dados de arrays ou objetos em variáveis distintas. */

const richestDuckInTheWorld = {
  fullName: 'Scrooge McDuck',
  birthplace: 'Glasgow, Scotland',
  city: 'Duckburg',
  jobs: ['Shoe shiner', 'Sailor', 'Cowboy', 'Miner', 'Banker', 'Entrepreneur'],
};

// Como podemos imprimir a seguinte saida:
// O Scrooge McDuck é pato mais rico do mundo, ele mora em Glasgow, Scotland
// e o seus primeiros trabalhos foram como Shoe shiner, Sailor e Cowboy

const { fullName: nomeCompleto, birthplace, jobs:[primeiroEmprego, segundoEmprego, terceiroEmprego] } = richestDuckInTheWorld;


const saida = `O ${nomeCompleto} é pato mais rico do mundo, ele mora em ${birthplace}
e o seus primeiros trabalhos foram como ${primeiroEmprego}, ${segundoEmprego} e ${terceiroEmprego}`;

console.log(saida);
