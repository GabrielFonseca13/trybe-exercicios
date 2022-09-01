// ########## OBJECT DESTRUCTURING ################

const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};
const { name1, seller } = product;
console.log(name1, seller); // Smart TV Crystal UHD

// ########## OBJECT DESTRUCTURING EM OBJETO QUE CONTEM OBJETO ################

// definindo o objeto
const character = {
  name: 'Luke SkyWalker',
  age: '53',
  description: {
    specieName: 'Human',
    jedi: true,
  },
  homeWorld: {
    name: 'Tatooine',
    population: '200000',
  },
};

// desestruturando o objeto:
const { name2, age2, homeWorld: { name: planetName }, description: { jedi } } = character;

// imprimindo os valores:
console.log(`Esse é o ${name2}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);

// ########## OBJECT DESTRUCTURING COM SPREAD OPERATOR ################

const daysOfWeek = {
  workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  weekend: ['Saturday', 'Sunday'],
};

const { workDays, weekend } = daysOfWeek;
console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
console.log(weekend); // ['Saturday', 'Sunday']

const weekdays = [...workDays, ...weekend];
console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

// ########## OBJECT DESTRUCTURING - RENOMEANDO AS CHAVES DO OBJETO ################

const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const { a: name3, b: classAssigned, c: subject } = student;

console.log(name3); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática

const studente = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};
const nome = studente.a;
console.log(nome); // Maria

// ########## OBJECT DESTRUCTURING COMO ARGUMENTOS DE UMA FUNÇÃO ################

const product2 = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const printProductDetails = ({ name, price, seller }) => {
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};

printProductDetails(product2); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas

// ########### PARA FIXAR OBJECT DESTRUCTURING #############

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