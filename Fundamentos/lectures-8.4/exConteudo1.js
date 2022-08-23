// buscar o maior valor em um array. Tente criar essa função apenas com for e depois tente com reduce.

//FOR

// const numbers = [50, 85, -30, 3, 15];
// const getBigger = (array) => {
//   for (let index = 1; index < numbers.length; index += 1) {
//     let bigger = numbers[0];
//     if (numbers[index] > bigger) {
//       bigger = numbers[index];
//     }
//     return bigger;
//   }
// };

// console.log(getBigger(numbers));

// REDUCE

const numbers = [50, 85, -30, 3, 15];
const getBigger = (array) => {
    const bigger = array.reduce((acc, curr) => curr > acc ? curr : acc)
    return bigger;
}
console.log(getBigger(numbers));
