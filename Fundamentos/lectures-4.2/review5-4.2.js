let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
acumulator = 0
for (let index = 0 ; index < numbers.length ; index += 1){
    console.log('index : '+ index);
    console.log('valor da posição: '+ numbers[index]);
    console.log('Acumulador: '+ acumulator);
    if (acumulator < numbers[index]){
        acumulator = numbers[index]
        console.log('acumulator atual: '+ acumulator);
        console.log('');
    } else {
        console.log('acumulator atual: '+ acumulator);
        console.log('');
    }
}
console.log('O maior número é: ' + acumulator);
