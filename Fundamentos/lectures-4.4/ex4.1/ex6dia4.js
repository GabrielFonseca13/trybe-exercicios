// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

function chessPiecesMoves(peca){
    if (peca === 'peao'){
        return 'O peão se move apenas uma casa em linha reta e para frente. Obs. no primeiro movimento pode andar 2 casas para frente. e para atacar o oponente ele pode mover-se uma casa na diagonal para frente.';
    } else if (peca === 'torre'){
        return 'A Torre se move quantas casas quiser em linha reta, na vertical e na horizontal';
    } else if (peca === 'cavalo'){
        return 'O cavalo se movimenta em "L". por exemplo, ele anda 3 casas em linha reta para frente e 1 casa para direita ou esquerda.'
    } else if (peca === 'bispo'){
        return 'O bispo move-se quantas casas quiser nas diagonais'
    } else if (peca === 'rainha'){
        return 'A rainha move-se quantas casas quiser em linha reta e diagonais em qualquer direçao.'
    } else if (peca === 'rei'){
        return 'O rei se move em qualquer direção apenas uma casa'
    } else {
        return 'Peça inválida'
    }
}
console.log(chessPiecesMoves('bispo'));