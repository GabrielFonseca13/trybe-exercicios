
// const sumAll = (...numeros) => { // [1,2,3]
//   let soma = 0;
//   numeros.forEach((number)=>{
//     soma += number
//   })
//   return soma
// };
const sumAll = (...numeros) => numeros.reduce((total, numero)=>total + numero);


module.exports = { sumAll };
