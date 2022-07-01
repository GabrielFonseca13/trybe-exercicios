// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

let a = 10
let b = 123
let c = 125

if (a > b && a > c){
    console.log(a);
} else if (b > a && b > c){
    console.log(b);
} else {
    console.log(c);
}