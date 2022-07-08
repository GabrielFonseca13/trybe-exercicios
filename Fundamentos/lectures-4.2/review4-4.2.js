let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let acumulator = 0;
for (let index = 0 ; index < numbers.length; index +=1){
    acumulator = acumulator + numbers[index];
    console.log('index: ' + index);
    console.log('valor da posição : ' + numbers[index]);
    console.log('somatotal: ' +  acumulator)
}
let media = acumulator / numbers.length
console.log('Média do Array = ' + media);
if (media > 20){
    console.log(' valor maior que 20');
} else {
    console.log(' valor menor que 20');
}