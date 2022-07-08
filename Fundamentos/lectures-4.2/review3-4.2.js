let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let acumulator = 0;
for (let index = 0 ; index < numbers.length; index +=1){
    acumulator = acumulator + numbers[index];
    console.log('index: ' + index);
    console.log('valor da posição : ' + numbers[index]);
    console.log('somatotal: ' +  acumulator)
}
console.log('Média do Array = ' + acumulator / numbers.length);