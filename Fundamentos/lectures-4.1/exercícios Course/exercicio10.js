const valorCusto = 7;
const valorVenda = 15;

if(valorCusto >= 0 && valorVenda >= 0){
    let valorCustoTotal = valorCusto * 1.2 ;
    let valorLucro = (valorVenda - valorCustoTotal);
    console.log('O lucro após vender 1000 unidades é de: ' + valorLucro * 1000);
}else{
    console.log('Erro: os valores não são válidos');
}