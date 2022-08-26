// const carros = ['Gol','Palio','HB20'];
// const motos = ['Biz', 'Hornet'];

// const veiculos = [...motos, ...carros];

// console.log(veiculos);

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

const sum = ( ...args) => args.reduce((acc, curr)=> acc + curr, 0);

console.log(sum(1,2,3,4,5,6,7,8,9,10));