let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0
       for(let index = 0; index < numbers.length; index += 1){
       sum = sum + numbers[index];
    }
let mediaAritmetica = sum / numbers.length;
console.log('A média Aritmética é igual a ', mediaAritmetica);