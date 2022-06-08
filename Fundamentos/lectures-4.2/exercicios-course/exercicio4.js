let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somatorium = 0
    for (let index = 0; index < numbers.length; index += 1){
        somatorium = (somatorium + (numbers[index]));
    }
let mediaaritmetica = somatorium/numbers.length
    if(mediaaritmetica > 20){
        console.log('valor maior que 20');
    } else {
        console.log('valor menor ou igual a 20');
    }