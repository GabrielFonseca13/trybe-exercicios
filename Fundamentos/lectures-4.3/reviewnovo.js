// copiar o Array
// percorre o Array
// anexar numa variavel a soma de todos os valores 
// criar estrutura de teste das condições (if)
// imprimir o resultado.

let fruits = [3, 4, 10, 1, 12];
let sum = 0
for (let index = 0; index < fruits.length; index +=1) {
    sum = sum + fruits[index]
    console.log(sum);
}
if (sum > 15) {
    console.log(sum);    
} else {
    console.log('valor menor que 16');
}

