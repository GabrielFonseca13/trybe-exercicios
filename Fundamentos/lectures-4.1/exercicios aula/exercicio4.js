const notaDesafioTecnico = 99;

if (notaDesafioTecnico > 100){
    console.log("Nota inválida");
}
else if (notaDesafioTecnico <=100 && notaDesafioTecnico >=80){
    console.log("Parabéns, você foi aprovada(o)!");
}

else if (notaDesafioTecnico <80 && notaDesafioTecnico >= 60){
    console.log("Você está na nossa lista de espera");
}

else {
    console.log("Você foi reprovada(o)")
}