// 1 - Crie um type union que represente os estados físicos da matéria: líquido, sólido ou gasoso.

import { stat } from "fs";

type StateOfMatter = 'liquido' | 'sólido' | 'gasoso';

function stateMatter(state: StateOfMatter) {
  console.log('EXERCICIO 1');
  return console.log(`Estado da informado: ${state}`);
}

stateMatter('liquido')

// 2 - Crie um type union que represente o documento identificador de uma pessoa que pode receber valores numéricos ou texto - Ex: “123.567.890-12” ou 123456789012.

type Documento = number | string;

function imprimirCPF(cpf: Documento) {
  console.log('EXERCICIO 2');
  console.log("Seu CPF é: " + cpf);
}
imprimirCPF(11111111111);
imprimirCPF('111.111.111-11');


// 3 - Crie um type union que represente sistemas operacionais: linux, mac os ou windows.

type OperacionalSystems = 'linux' | 'mac' | 'windows';
function showOperationalSystem(os: OperacionalSystems) {
  console.log('EXERCICIO 3');
  return console.log(`Sistema Operacional informado: ${os}`);
}
showOperationalSystem('windows');


// 4 - Crie um type union que represente as vogais do alfabeto.

type Vogals = 'a' | 'e' | 'i' | 'o' | 'u';

function showVogals(vogals: Vogals) {
  console.log('EXERCICIO 4');
  return console.log(`Vogal informada: ${vogals}`);
}

showVogals('o');
