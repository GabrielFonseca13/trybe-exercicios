let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
acumulator = numbers[0]    
    for ( let index = 1 ; index < numbers.length ; index +=1){
        if (acumulator > numbers[index]) {
        console.log('index: '+ index);
        console.log('valor da posição atual: '+ numbers[index]);
        console.log('acumulator atual: ' + acumulator);
 
        acumulator = numbers[index]
        } else {
            console.log('acumulator atual:' + acumulator);
            console.log('');
        }
    }
    console.log('o menor número é: ' + acumulator);