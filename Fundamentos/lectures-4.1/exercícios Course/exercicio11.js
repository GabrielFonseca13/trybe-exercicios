let salarioBruto = 6000;

if (salarioBruto > 0 && salarioBruto <= 1556.94) {
  let inss = salarioBruto * 0.08;
  let salarioLiquido = salarioBruto - inss;
  console.log(salarioLiquido);
} else if (salarioBruto > 1556.94 && salarioBruto <= 1903.98) {
  let inss = salarioBruto * 0.09;
  let salarioLiquido = salarioBruto - inss;
  console.log(salarioLiquido);
} 
else if (salarioBruto > 1903.98 && salarioBruto <= 2594.92) {
  let inss = salarioBruto * 0.09;
  let salarioDeduzido = salarioBruto - inss;
  let deducaoIr = salarioDeduzido * 0.075;
  let ir = deducaoIr - 142.8;
  salarioLiquido = salarioBruto - inss - ir;
  console.log(salarioLiquido);
} 
else if (salarioBruto > 2594.92 && salarioBruto <= 2826.65) {
  let inss = salarioBruto * 0.11;
  let salarioDeduzido = salarioBruto - inss;
  let deducaoIr = salarioDeduzido * 0.075;
  let ir = deducaoIr - 142.8;
  salarioLiquido = salarioBruto - inss - ir;
  console.log(salarioLiquido);
} 
else if (salarioBruto > 2826.65 && salarioBruto <= 3751.05){
  let inss = salarioBruto * 0.11;
  let salarioDeduzido = salarioBruto - inss;
  let deducaoIr = salarioDeduzido * 0.15;
  let ir = deducaoIr - 354.8;
  salarioLiquido = salarioBruto - inss - ir;
  console.log(salarioLiquido);
}
else if (salarioBruto > 3751.05 && salarioBruto <= 4664.68){
  let inss = salarioBruto * 0.11;
  let salarioDeduzido = salarioBruto - inss;
  let deducaoIr = salarioDeduzido * 0.225;
  let ir = deducaoIr - 636.13;
  salarioLiquido = salarioBruto - inss - ir;
  console.log(salarioLiquido);
}
else if(salarioBruto > 4664.68 && salarioBruto <= 5189.82){
  let inss = salarioBruto * 0.11;
  let salarioDeduzido = salarioBruto - inss;
  let deducaoIr = salarioDeduzido * 0.275;
  let ir = deducaoIr - 869.36;
  salarioLiquido = salarioBruto - inss - ir;
  console.log(salarioLiquido);
}
else if(salarioBruto > 5189.82){
  let inss = 570.88;
  let salarioDeduzido = salarioBruto - inss;
  let deducaoIr = salarioDeduzido * 0.275;
  let ir = deducaoIr - 869.36;
  salarioLiquido = salarioBruto - inss - ir;
  console.log(salarioLiquido);
} else {
  console.log('Valor Inválido');
}
