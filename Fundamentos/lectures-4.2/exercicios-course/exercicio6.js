let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contImpar = 0;
    for(let index = 0; index < numbers.length; index +=1){
        if(numbers[index] % 2 !== 0){
            contImpar += 1
        };
    }
console.log(contImpar);