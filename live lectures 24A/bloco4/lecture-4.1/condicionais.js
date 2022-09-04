let numero = 11;

if (numero % 2 == 0) {
  console.log('O número é par');
} else {
  console.log('O número nao é par');
}

// calcular o imposto sobre o valor do produto
let valorProduto = 200.0;

// Se o valor do produto for menor ou igual a 100.00 imposto deve ser 5%
// Se o valor do produto for maior que 100.00 e menor que 200 imposto deve ser 10%
// Se o valor do produto for maior 200.00 imposto deve ser 15%

if (valorProduto <= 100) {
  console.log('Imposto de:', valorProduto * 0.05);
} else if (valorProduto > 100 && valorProduto < 200) {
  console.log('Imposto de:', valorProduto * 0.10);
} else if (valorProduto > 200) {
  console.log('Imposto de:', valorProduto * 0.15);
}
