// ex1
var numberInput = 7;
var isItAPrime = function (param) {
    for (var i = 2; i < param; i++)
        if (param % i === 0) {
            return false;
        }
    return param > 1;
};
isItAPrime(numberInput)
    ? console.log(numberInput + " \u00E9 primo")
    : console.log(numberInput + " n\u00E3o \u00E9 primo");
// ex2
// Essa função é responsável por validar se o formato do e-mail está correto.
var emailInput = 'email@email.com';
var validateEmailFormat = function (param) {
    var re = /\S+@\S+\.\S+/;
    return re.test(param);
};
console.log(validateEmailFormat(emailInput));
// ex3
// Essa função recebe uma lista e ordena seu conteúdo de forma crescente.
var numberList = [10, 5, 18, 2, 8, 23];
var sortInput = function (param) {
    return param.sort(function (a, b) {
        return a - b;
    });
};
console.log(sortInput(numberList));
// ex4
// Essa função é responsável por receber um objeto e formar uma frase utilizando as chaves do mesmo.
var peopleInput = {
    name: 'Rui',
    age: 23
};
var createSimpleSentence = function (param) {
    return "Ol\u00E1, meu nome \u00E9 " + param.name + " e tenho " + param.age + " anos.";
};
console.log(createSimpleSentence(peopleInput));
// ex5
// Essa é uma função que verifica se a idade passada é maior ou menor de 18 anos.
var ageInput = 15;
var isOfLegalAge = function (param) {
    return !!param;
};
ageInput >= 18
    ? console.log(isOfLegalAge('true'))
    : console.log(isOfLegalAge(false));
