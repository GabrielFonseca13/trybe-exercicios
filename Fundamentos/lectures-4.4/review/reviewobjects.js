let objeto = {
    perimetro: 0,
    area: 0,
};

function calculaAreaEPerimetro(base, altura){
    objeto.perimetro = (base * 2) + (altura * 2);
    objeto.area = base * altura ;

    return objeto;
}

console.log(calculaAreaEPerimetro(5,7)); 

// let numeros = {
//     pares = 0,
//     impares = 0,
// }

function informaParImpar(array){
    let contPar = 0;
    let contImpar = 0;
    for (let index = 0; index < array.length; index +=1){
        if (array[index] % 2 === 0){
            contPar += 1;
        } else {
            contImpar += 1;
        }
        return contImpar, contPar;
    }
    console.log('o array tem '+ contPar +' números pares');
    console.log('o array tem '+ contImpar +' números Impares');
}
console.log(informaParImpar([5,25,37,17,18,3,10]));