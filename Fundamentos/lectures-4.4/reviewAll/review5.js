function biggestNumber (a, b, c) {
    if (a > b && a > c) {
    return a;    
} else if (b > a && b > c) {
    return b;
} else {
    return c;
}
}

console.log(biggestNumber(50 , 40 , 30))