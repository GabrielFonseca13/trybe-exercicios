function maiorNum(num1,num2){
    if (num1>num2){
        return 'o Primeiro número: '+ num1 +' é maior que o segundo número: '+ num2;
    } else if (num2 > num1) {
        return 'o Segundo número: '+ num2 +' é maior que o primeiro número: '+ num1;
    } else {
        return 'Os números são iguais';
    }
}
console.log(maiorNum(13,54));