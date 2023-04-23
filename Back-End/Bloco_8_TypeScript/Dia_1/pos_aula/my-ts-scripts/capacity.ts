// ./length.ts
// lembrete: mudar o array capacitycapacityunits e a base para o cálculo em cada arquivo!

const readlineCapacity = require('readline-sync'); // importamos o pacote readlineCapacity-sync
const capacityunits = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

function capacityConvert(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = capacityunits.indexOf(fromUnit); // pegamos o index da unidade base no array
  const toIndex = capacityunits.indexOf(toUnit); // pegamos o index da unidade para a conversão
  const exponent = toIndex - fromIndex; // calculamos o expoente a partir da diferença dos index

  return value * Math.pow(10, exponent);
}

function capacityexec() {
  // pegamos o valor a ser convertido digitado pela pessoa usuária
  const value = readlineCapacity.questionFloat('Digite o valor a ser convertido: \n');

  // pedimos que a pessoa usuária escolha a unidade base
  const fromUnitChoiceIndex = readlineCapacity.keyInSelect(capacityunits, 'Escolha um número para a unidade base:');

  // pedimos que a pessoa usuária escolha a unidade para conversão
  const toUnitChoiceIndex = readlineCapacity.keyInSelect(capacityunits, 'Escolha um número para a conversão:');

  const toUnitChoice = capacityunits[toUnitChoiceIndex];
  const fromUnitChoice = capacityunits[fromUnitChoiceIndex];

  // Se o usuário escolher a opção 0 (cancelar), uma mensagem é impressa no terminal e usamos o return para encerrar a capacityexecução
  if (!fromUnitChoice || !toUnitChoice) {
    console.log(`Função cancelada`);
    return 0;
  }

  const result = capacityConvert(value, fromUnitChoice, toUnitChoice);

  // montamos a mensagem de saída
  const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;

  // printamos a mensagem de saída no terminal
  console.log(message);
}

capacityexec();