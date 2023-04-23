"use strict";
// ./length.ts
// lembrete: mudar o array units e a base para o cálculo em cada arquivo!
const readlineLength = require('readline-sync'); // importamos o pacote readlineLength-sync
const lengthunits = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
function lengthConvert(value, fromUnit, toUnit) {
    const fromIndex = lengthunits.indexOf(fromUnit); // pegamos o index da unidade base no array
    const toIndex = lengthunits.indexOf(toUnit); // pegamos o index da unidade para a conversão
    const exponent = toIndex - fromIndex; // calculamos o expoente a partir da diferença dos index
    return value * Math.pow(10, exponent);
}
function lengthexec() {
    // pegamos o valor a ser convertido digitado pela pessoa usuária
    const value = readlineLength.questionFloat('Digite o valor a ser convertido: \n');
    // pedimos que a pessoa usuária escolha a unidade base
    const fromUnitChoiceIndex = readlineLength.keyInSelect(lengthunits, 'Escolha um número para a unidade base:');
    // pedimos que a pessoa usuária escolha a unidade para conversão
    const toUnitChoiceIndex = readlineLength.keyInSelect(lengthunits, 'Escolha um número para a conversão:');
    const toUnitChoice = lengthunits[toUnitChoiceIndex];
    const fromUnitChoice = lengthunits[fromUnitChoiceIndex];
    // Se o usuário escolher a opção 0 (cancelar), uma mensagem é impressa no terminal e usamos o return para encerrar a execução
    if (!fromUnitChoice || !toUnitChoice) {
        console.log(`Função cancelada`);
        return 0;
    }
    const result = lengthConvert(value, fromUnitChoice, toUnitChoice);
    // montamos a mensagem de saída
    const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;
    // printamos a mensagem de saída no terminal
    console.log(message);
}
lengthexec();
