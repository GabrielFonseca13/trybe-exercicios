const anguloA = 10;
const anguloB = 90;
const anguloC = 79;

let somaDosAngulos = anguloA + anguloB + anguloC;

let angulosPositivos = anguloA > 0 && anguloB > 0 && anguloC > 0;

if (angulosPositivos){
    if (somaDosAngulos === 180){
    console.log(true);
}else {
    console.log(false);
};
}else{
    console.log('Erro: Angulo Inválido')
};