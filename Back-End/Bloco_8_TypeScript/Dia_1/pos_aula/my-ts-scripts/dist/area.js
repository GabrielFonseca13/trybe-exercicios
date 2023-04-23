"use strict";
const readlineArea = require('readline-sync'); // importamos o pacote readlineArea-sync
const areaUnits = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];
function areaConvert(value, fromUnit, toUnit) {
    const fromIndex = areaUnits.indexOf(fromUnit); // pegamos o index da unidade base no array
    const toIndex = areaUnits.indexOf(toUnit); // pegamos o index da unidade para a conversão
    const exponent = toIndex - fromIndex; // calculamos o expoente a partir da diferença dos index
    return value * Math.pow(100, exponent);
}
function areaexec() {
    // pegamos o valor a ser convertido digitado pela pessoa usuária
    const value = readlineArea.questionFloat('Digite o valor a ser convertido: \n');
    // pedimos que a pessoa usuária escolha a unidade base
    const fromUnitChoiceIndex = readlineArea.keyInSelect(areaUnits, 'Escolha um número para a unidade base:');
    // pedimos que a pessoa usuária escolha a unidade para conversão
    const toUnitChoiceIndex = readlineArea.keyInSelect(areaUnits, 'Escolha um número para a conversão:');
    const toUnitChoice = areaUnits[toUnitChoiceIndex];
    const fromUnitChoice = areaUnits[fromUnitChoiceIndex];
    // Se o usuário escolher a opção 0 (cancelar), uma mensagem é impressa no terminal e usamos o return para encerrar a areaexecução
    if (!fromUnitChoice || !toUnitChoice) {
        console.log(`Função cancelada`);
        return 0;
    }
    const result = areaConvert(value, fromUnitChoice, toUnitChoice);
    // montamos a mensagem de saída
    const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;
    // printamos a mensagem de saída no terminal
    console.log(message);
}
areaexec();
