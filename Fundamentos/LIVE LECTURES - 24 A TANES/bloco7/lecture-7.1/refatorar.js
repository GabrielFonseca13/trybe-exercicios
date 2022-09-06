function calculadora(operacao, n1, n2) {
  return (
    'O resultado da operação ' +
    operacao +
    ' é: ' +
    metodos(operacao, n1, n2)
  );
}

function metodos(operacao, numero1, numero2){
  if(operacao === 'soma'){
    return numero1 + numero2;
  }else if (operacao === 'subtracao'){
    return numero1 - numero2;
  }
}

console.log(calculadora('soma', 11 , 3));
console.log(calculadora('subtracao', 11 , 3));

// Refatorando


