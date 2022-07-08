let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contador = 0;
for ( let index = 0; index < numbers.length; index +=1){
    if (numbers[index]%2 !== 0){
    contador += 1 ;
    console.log('contador atual: '+ contador);
    }
}
if (contador === 0){
    console.log('Nenhum valor impar foi encontrado');
} else{
console.log('Existem '+ contador + ' números impares');
}
