// ########## SPREAD OPERATOR ################

// // const carros = ['Gol','Palio','HB20'];
// // const motos = ['Biz', 'Hornet'];

// // const veiculos = [...motos, ...carros];

// // console.log(veiculos);

// ########## SPREAD OPERATOR COM OBJETOS ################
// const pessoa = {
//     nome: 'Gabriel',
//     idade: 29,
//     cidade: 'Belo Horizonte',
// }

// const conhecimentosTrybe = {
//     softSkill: true,
//     hardSkill: true,
//     trabalho: true,
// }

// const pessoaTryber = {
//     ...pessoa,
//     ...conhecimentosTrybe,
//     esporte: 'Futevolei',
//     Musica: 'Pagode',
// }

// console.log(pessoaTryber);

// ########## PARAMETRO REST ################

// const sum = (...args) => args.reduce((acc, curr) => acc + curr, 0);

// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// function quantosParams(...args) {
//     console.log('parâmetros:', args);
//     return `Você passou ${args.length} parâmetros para a função.`;
//   }

//   console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
//   console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.

// ########## OBJECT DESTRUCTURING ################

// const product = {
//   name: 'Smart TV Crystal UHD',
//   price: '1899.05',
//   seller: 'Casas de Minas',
// };
// const { name, seller } = product;
// console.log(name, seller); // Smart TV Crystal UHD

// ########## OBJECT DESTRUCTURING EM OBJETO QUE CONTEM OBJETO ################

// definindo o objeto
// const character = {
//   name: 'Luke SkyWalker',
//   age: '53',
//   description: {
//     specieName: 'Human',
//     jedi: true,
//   },
//   homeWorld: {
//     name: 'Tatooine',
//     population: '200000',
//   },
// };

// // desestruturando o objeto:
// const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;

// // imprimindo os valores:
// console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);

// ########## OBJECT DESTRUCTURING COM SPREAD OPERATOR ################

// const daysOfWeek = {
//   workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
//   weekend: ['Saturday', 'Sunday'],
// };

// const { workDays, weekend } = daysOfWeek;
// console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
// console.log(weekend); // ['Saturday', 'Sunday']

// const weekdays = [...workDays, ...weekend];
// console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

// ########## OBJECT DESTRUCTURING - RENOMEANDO AS CHAVES DO OBJETO ################

// const student = {
//   a: 'Maria',
//   b: 'Turma B',
//   c: 'Matematica',
// };

// const { a: name, b: classAssigned, c: subject } = student;

// console.log(name); // Maria
// console.log(classAssigned); // Turma B
// console.log(subject); // Matemática

// const studente = {
//   a: 'Maria',
//   b: 'Turma B',
//   c: 'Matematica',
// };
// const nome = studente.a;
// console.log(nome); // Maria

// ########## OBJECT DESTRUCTURING COMO ARGUMENTOS DE UMA FUNÇÃO ################

// const product = {
//   name: 'Smart TV Crystal UHD',
//   price: '1899.05',
//   seller: 'Casas de Minas',
// };

// const printProductDetails = ({ name, price, seller }) => {
//   console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
// };

// printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas