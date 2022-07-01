const custoProduto = 15;
const valorVenda = 20;

let valorCustoTotal = custoProduto + (custoProduto*0,2);
let lucro = valorVenda - valorCustoTotal;

if (custoProduto < 0 || valorVenda < 0){
    console.log('error: valores inválidos');
}

console.log('O lucro é de: R$' + lucro);
console.log('Ao vender 1000 produtos o lucro será de: R$' + lucro * 1000);
