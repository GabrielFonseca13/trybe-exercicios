function isPositive (a){
    if (a > 0) {
        return 'Is Positive';
    } else if (a < 0){
        return 'Is Negative';
    } else {
        return 'Number is 0';
    }
}

console.log(isPositive(0));