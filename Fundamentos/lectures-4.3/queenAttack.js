// Posição da rainha
let queenRowPosition = 8;
let queenColumnPosition = 1;

//posição do oponente
let OpponentRowPosition = 1;
let OpponentcolumnPosition = 8;

//armazenar se o ataque pode acontecer ou não
let canAttack = false;

//verificar se pode atacar em linha reta
if(queenColumnPosition === OpponentcolumnPosition || queenRowPosition === OpponentRowPosition){
    canAttack = true;
    console.log('Ataque possível em linha reta');
};

// Verificar se pode atacar na diagonal superior direita
for(let iSupDir = 1; iSupDir < 8; iSupDir += 1){
    let currentQueenRow = queenRowPosition + iSupDir;
    let currentQueenColumn = queenColumnPosition + iSupDir;
    if(currentQueenRow > 8 || currentQueenColumn < 8){
        break;
    }
    if (currentQueenRow === OpponentRowPosition && currentQueenColumn === OpponentcolumnPosition){
        console.log('Ataque na Superior direita');
    }; 
}
// Verificar se pode atacar na diagonal inferior esquerda
for(let iInfEsq = 1; iInfEsq < 8; iInfEsq += 1){
    let currentQueenRow = queenRowPosition - iInfEsq;
    let currentQueenColumn = queenColumnPosition - iInfEsq;
    if(currentQueenRow < 1 || currentQueenColumn < 1){
        break;
    }
    if (currentQueenRow === OpponentRowPosition && currentQueenColumn === OpponentcolumnPosition){
        console.log('Ataque na inferior Esquerda');
    }; 
}
// Verificar se pode atacar na diagonal superior esquerda
for(let iSupEsq = 1; iSupEsq < 8; iSupEsq += 1){
    let currentQueenRow = queenRowPosition + iSupEsq;
    let currentQueenColumn = queenColumnPosition - iSupEsq;
    if(currentQueenRow > 8 || currentQueenColumn < 1){
        break;
    }
    if (currentQueenRow === OpponentRowPosition && currentQueenColumn === OpponentcolumnPosition){
        console.log('Ataque na Superior Esquerda');
    }; 
}
// Verificar se pode atacar na diagonal inferior direita
for(let iInfDir = 1; iInfDir < 8; iInfDir += 1){
    let currentQueenRow = queenRowPosition - iInfDir;
    let currentQueenColumn = queenColumnPosition + iInfDir;
    if(currentQueenRow < 1 || currentQueenColumn > 8){
        break;
    }
    if (currentQueenRow === OpponentRowPosition && currentQueenColumn === OpponentcolumnPosition){
        console.log('Ataque na inferior Direita');
    }; 
}