// ########### SPREAD OPERATOR #############

// Faça uma lista com as suas frutas favoritas
// const specialFruit = ['Kiwi', 'Mango', 'Avocado'];

// // Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['Honey', 'Sugar', 'Milk'];

// const fruitSalad = (fruit, additional) => {
//   return [...fruit,...additional];
// };

// console.log(fruitSalad(specialFruit, additionalItens));

// ########### OBJECT DESTRUCTURING #############

// 1 - Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro com informações referentes ao cargo desta pessoa usuária na empresa trappistEnterprise. Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator.


const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const trappistEnterpriseEmployees = {
  ...user,
  ...jobInfos
};

// console.log(trappistEnterpriseEmployees);

// 2 - Com o objeto em mãos, imprima no console uma frase utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals.
// Exemplo "Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer and my squad is RLL-Rocket Landing Logic"

const {name, age, nationality, profession, squad, squadInitials} = trappistEnterpriseEmployees;

console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}.`);