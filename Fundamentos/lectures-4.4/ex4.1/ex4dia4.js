// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
function verifyPositive(num1){
    if (num1 > 0){
        return ' O número '+ num1 +' é positivo';
    } else if (num1 < 0){
        return 'O número '+ num1 + ' é negativo';
    } else {
        return 'O número informado é igual a 0.';
    }
}
console.log(verifyPositive(-15));