// // const carros = ['Gol','Palio','HB20'];
// // const motos = ['Biz', 'Hornet'];

// // const veiculos = [...motos, ...carros];

// // console.log(veiculos);

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

// const sum = (...args) => args.reduce((acc, curr) => acc + curr, 0);

// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// function quantosParams(...args) {
//     console.log('parâmetros:', args);
//     return `Você passou ${args.length} parâmetros para a função.`;
//   }

//   console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
//   console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.

// const product = {
//   name: 'Smart TV Crystal UHD',
//   price: '1899.05',
//   seller: 'Casas de Minas',
// };
// const { name } = product;
// console.log(name); // Smart TV Crystal UHD

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


const daysOfWeek = {
  workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  weekend: ['Saturday', 'Sunday'],
};

const { workDays, weekend } = daysOfWeek;
console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
console.log(weekend); // ['Saturday', 'Sunday']

const weekdays = [...workDays, ...weekend];
console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']