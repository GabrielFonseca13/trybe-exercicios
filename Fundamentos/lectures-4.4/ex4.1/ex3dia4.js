// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

function maiorNum(num1,num2,num3){
    if (num1>num2 && num1>num3){
        return 'o Primeiro número '+ num1 +' é o maior'
    } else if (num2>num1 && num2>num3){
        return 'o Segundo número '+ num2 +' é o maior'
    } else if (num3>num1 && num3>num2){
        return ' o terceito número '+ num3 +' é o maior'
    } else {
        return 'Existem números iguais, portanto é impossível definir o maior';
    }
}
console.log(maiorNum(46,70,70));