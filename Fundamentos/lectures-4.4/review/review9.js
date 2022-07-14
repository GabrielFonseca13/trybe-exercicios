function conversePercent (a){
    if (a >= 90 && a < 100){
        return 'A';
    } else if (a >= 80 && a < 90){
        return 'B';
    } else if (a >=70 && a < 80){
        return 'C';
    } else if (a >= 60 && a < 70){
        return 'D';
    } else if (a >= 50 && a < 60){
        return 'E';
    } else  if (a >= 0 && a < 50){
        return 'F';
    } else {
        return 'Nota Inválida'
    }
}

console.log(conversePercent(101));