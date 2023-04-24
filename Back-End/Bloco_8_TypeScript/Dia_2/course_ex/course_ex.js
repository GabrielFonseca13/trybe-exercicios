// 1 - Crie um type para um objeto que represente um pássaro.
function showBirdDetails(birdDetails) {
    return console.log("O nome do p\u00E1ssaro \u00E9 : " + birdDetails.name + "\n  sua cor \u00E9 " + birdDetails.color + ",\n  ele \u00E9 encontrado no pa\u00EDs: " + birdDetails.location + "\n  O tamanho m\u00E9dio \u00E9 de " + birdDetails.size + " Cm's\n  e pesa em m\u00E9dia: " + birdDetails.weigh + " gramas");
}
;
var birdExample = {
    name: 'Passaro de fogo',
    color: 'vermelho e amarelo',
    location: 'Brasil',
    size: 42,
    weigh: 270
};
showBirdDetails(birdExample);
function sumEx2(num) {
    var result = num.num1 + num.num2;
    console.log('EXERCICIO 2');
    return console.log("soma com arrays - Resultado: " + result + " ");
}
var numSoma = {
    num1: 20,
    num2: 30
};
sumEx2(numSoma);
function showAddress(address) {
    console.log('EXERCICIO 3');
    return console.log("O Endere\u00E7o cadastrado \u00E9: " + address.street + "\n  N\u00FAmero: " + address.number + ", na cidade: " + address.city);
}
var addressTest = {
    street: 'Rua Do amendoim',
    number: 123,
    city: 'Belo HOrizonte'
};
showAddress(addressTest);
