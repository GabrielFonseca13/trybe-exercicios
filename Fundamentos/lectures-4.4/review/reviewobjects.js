let objeto = {
    perimetro: 0,
    area: 0,
};

function calculaAreaEPerimetro(base, altura){
    objeto.perimetro = (base * 2) + (altura * 2);
    objeto.area = base * altura ;

    return objeto;
}

console.log(calculaAreaEPerimetro(5,7));