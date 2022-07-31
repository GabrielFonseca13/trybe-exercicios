// EXERCICIO 1 - Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer.
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
console.log(objeto);
console.log(calculaAreaEPerimetro(5,7));
console.log(objeto);

//EXERCICIO 2 - Crie um função que, dado im array de números inteiros, 
// retorne a quantidade de números pares e impares no formato.

let numeros = {
    pares: 0,
    impares: 0,
}

let arrayParaTeste = [];
    for (let i = 0; i <= 20; i +=1 ){
        arrayParaTeste.push(i);
    }
    console.log(arrayParaTeste);

// EXERCICIO3 - Crie uma função que receba uma string ending. Verifique se a string ending é o final da string word.
// Considere que a string ending sempre será menor que a string world.
// Usar Split.