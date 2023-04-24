"use strict";
// 1 - Crie um type union que represente os estados físicos da matéria: líquido, sólido ou gasoso.
exports.__esModule = true;
function stateMatter(state) {
    console.log('EXERCICIO 1');
    return console.log("Estado da informado: " + state);
}
stateMatter('liquido');
function imprimirCPF(cpf) {
    console.log('EXERCICIO 2');
    console.log("Seu CPF é: " + cpf);
}
imprimirCPF(11111111111);
imprimirCPF('111.111.111-11');
function showOperationalSystem(os) {
    console.log('EXERCICIO 3');
    return console.log("Sistema Operacional informado: " + os);
}
showOperationalSystem('windows');
function showVogals(vogals) {
    console.log('EXERCICIO 4');
    return console.log("Vogal informada: " + vogals);
}
showVogals('o');
