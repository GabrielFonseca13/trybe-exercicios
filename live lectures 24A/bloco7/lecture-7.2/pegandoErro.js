const verificaValoresNumericos = (n1, n2) => {
  if(typeof n1 !== 'number' || typeof n2 !== 'number'){
    throw new Error('Valores devem ser numéricos!!!');
  }
};

const soma = (n1, n2) => {
  try {
    verificaValoresNumericos(n1, n2);
    return n1 + n2;
  } catch (erro) {
    return erro.message;
  }
}
console.log(soma(3, 8));