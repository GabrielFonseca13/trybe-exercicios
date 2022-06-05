const pecaXadrez = 'RainHA';

switch (pecaXadrez.toLowerCase()){
    case 'rei':
        console.log("REI: Movimenta uma casa apenas para qualquer direção.");
        break;
    case 'torre':
        console.log("TORRE: Movimenta quantas casas quiser para frente, para trás, direita e esquerda");
        break;
    case 'bispo':
        console.log('BISPO: Movimenta quantas casas quiser nas diagonais');
        break;
    case 'cavalo':
        console.log('CAVALO: Faz o movimento de "L" andando 3 casas em inha reta e uma para direita ou esquerda');
        break;
    case 'rainha':
        console.log('RAINHA: Movimenta-se em todas as direções quabtas casas quiser, em linha reta ou em diagonais');
        break;
    case 'peao':
        console.log('PEÃO: movimenta-se apenas uma casa e para frente, o peão pode "comer" peças adversárias na diagonal. No primeiro movimento do Peão ele pode avançar 2 casas a frente');
        break;
}