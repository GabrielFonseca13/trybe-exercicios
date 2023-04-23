const readlineMass = require('readline-sync'); // importamos o pacote readlineMass-sync
const massunits = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

function massConvert(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = massunits.indexOf(fromUnit); // pegamos o index da unidade base no array
  const toIndex = massunits.indexOf(toUnit); // pegamos o index da unidade para a conversão
  const exponent = toIndex - fromIndex; // calculamos o expoente a partir da diferença dos index

  return value * Math.pow(10, exponent);
}

function massExec() {
  // pegamos o valor a ser convertido digitado pela pessoa usuária
  const value = readlineMass.questionFloat('Digite o valor a ser convertido: \n');

  // pedimos que a pessoa usuária escolha a unidade base
  const fromUnitChoiceIndex = readlineMass.keyInSelect(massunits, 'Escolha um número para a unidade base:');

  // pedimos que a pessoa usuária escolha a unidade para conversão
  const toUnitChoiceIndex = readlineMass.keyInSelect(massunits, 'Escolha um número para a conversão:');

  const toUnitChoice = massunits[toUnitChoiceIndex];
  const fromUnitChoice = massunits[fromUnitChoiceIndex];

  // Se o usuário escolher a opção 0 (cancelar), uma mensagem é impressa no terminal e usamos o return para encerrar a execução
  if (!fromUnitChoice || !toUnitChoice) {
    console.log(`Função cancelada`);
    return 0;
  }

  const result = massConvert(value, fromUnitChoice, toUnitChoice);

  // montamos a mensagem de saída
  const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;

  // printamos a mensagem de saída no terminal
  console.log(message);
}

massExec();