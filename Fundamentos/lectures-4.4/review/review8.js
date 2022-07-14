function chessMovePiece(chessPiece) {
    if (chessPiece === 'rei') {
        return 'Pode mover-se em qualquer direção, porém apenas uma casa por vez, como indicam os pontos vermelhos na figura abaixo.';      
    } else if (chessPiece === 'rainha'){
        return 'Assim como o Rei, pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.';
    } else if (chessPiece === 'torre'){
        return 'Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.';
    } else if (chessPiece === 'bispo'){
        return 'Move-se na diagonal, quantas casas quiser';
    } else if (chessPiece === 'cavalo'){
        return 'É a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas. O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”';
    } else if (chessPiece === 'peao') {
        return 'Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas. O peão é a única peça que não pode retroceder, e também a única que efetua a captura com um movimento diferente do utilizado para avançar no tabuleiro. O peão pode capturar as peças que estejam uma fileira acima, mas nas colunas adjacentes a sua.';
    } else {
        return 'Peça Inválida';
    }
}

console.log(chessMovePiece('peao'));