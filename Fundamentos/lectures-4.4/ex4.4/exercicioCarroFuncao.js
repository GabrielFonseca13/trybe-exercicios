let statusCarro = 'desligado';
let aceleracao = 0;

function ligarDesligar (){
    if (statusCarro === 'desligado'){
        statusCarro = 'ligado';
    } else {
        statusCarro = 'desligado';
    }
    return statusCarro;
};

function acelerar(incremento){
    aceleracao = aceleracao + incremento;

    return 'Acelerando a '+ aceleracao + 'Km/h.';
};

function frear(decremento){
    aceleracao = aceleracao - decremento;

    return 'Desacelerando a ' + aceleracao + 'Km/h';
};

console.log(ligarDesligar());

