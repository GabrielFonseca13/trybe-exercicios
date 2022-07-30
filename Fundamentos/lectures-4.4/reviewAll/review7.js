function isTriangle(a,b,c){
    if (a < 0 || b < 0 || c < 0){
        return 'Error: Invalid Angle';
    }

    if (a + b + c === 180) {
        return true;
    } else { 
        return false;
    }
}

console.log(isTriangle(1, 174, 4));