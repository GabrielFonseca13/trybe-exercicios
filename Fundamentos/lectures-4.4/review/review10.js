function isPair (a,b,c){
    if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0){
        return true;
    } else {
        return false;
    }
}

console.log(isPair(2,9,1));