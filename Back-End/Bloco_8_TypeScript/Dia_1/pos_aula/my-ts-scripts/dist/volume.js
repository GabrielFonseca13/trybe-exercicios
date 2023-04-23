"use strict";
const readline = require('readline-sync'); // importamos o pacote readline-sync
const volumeUnits = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];
function volumeConvert(value, fromUnit, toUnit) {
    const fromIndex = volumeUnits.indexOf(fromUnit); // pegamos o index da unidade base no array
    const toIndex = volumeUnits.indexOf(toUnit); // pegamos o index da unidade para a conversão
    const exponent = toIndex - fromIndex; // calculamos o expoente a partir da diferença dos index
    return value * Math.pow(1000, exponent);
}
function volumeExec() {
    // pegamos o valor a ser convertido digitado pela pessoa usuária
    const value = readline.questionFloat('Digite o valor a ser convertido: \n');
    // pedimos que a pessoa usuária escolha a unidade base
    const fromUnitChoiceIndex = readline.keyInSelect(volumeUnits, 'Escolha um número para a unidade base:');
    // pedimos que a pessoa usuária escolha a unidade para conversão
    const toUnitChoiceIndex = readline.keyInSelect(volumeUnits, 'Escolha um número para a conversão:');
    const toUnitChoice = volumeUnits[toUnitChoiceIndex];
    const fromUnitChoice = volumeUnits[fromUnitChoiceIndex];
    // Se o usuário escolher a opção 0 (cancelar), uma mensagem é impressa no terminal e usamos o return para encerrar a execução
    if (!fromUnitChoice || !toUnitChoice) {
        console.log(`Função cancelada`);
        return 0;
    }
    const result = volumeConvert(value, fromUnitChoice, toUnitChoice);
    // montamos a mensagem de saída
    const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;
    // printamos a mensagem de saída no terminal
    console.log(message);
}
volumeExec();
