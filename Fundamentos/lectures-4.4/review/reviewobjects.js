// EXERCICIO 1 - Crie uma função que calculoe a área e o perímetro de im quadrilátero qualquer.
// Essa função deve receber dois parametros: base e altura e retornar um objeto no formato:
// Fórmulas: perímetro = (2* base) + (2*altura) area = base * altura.

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

//EXERCICIO 2 - Crie um função que, dado im array de números inteiros, 
// retorne a quantidade de números pares e impares no formato.


let numeros = {
    pares: 0,
    impares: 0,
}

function informaParImpar(numeros){
    for (let index = 0; index < numeros.length; index +=1){
        if (numeros[index] % 2 === 0){
            numeros['pares'] += 1;
        } else {
            numeros['impar'] += 1;
        }
        return numeros['par'], numeros['impar'];
    }
    console.log('o array tem '+ numeros['par'] +' números pares');
    console.log('o array tem '+ numeros['impar'] +' números Impares');
}
console.log(informaParImpar([5,25,37,17,18,3,10]));

// EXERCICIO3 - Crie uma função que receba uma string ending. Verifique se a string ending é o final da string word.
// Considere que a string ending sempre será menor que a string world.
// Usar Split.