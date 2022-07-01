const notaAluno = 101;

if (notaAluno < 0 || notaAluno >100){
    console.log('error: NOTA INVÁLIDA');
} else if (notaAluno >= 80 && notaAluno <= 100){
    console.log('Parabéns, você foi aprovada(o)!');
} else if (notaAluno < 80 && notaAluno >= 60){
    console.log('Você está na nossa lista de espera');
} else {
    console.log('Você foi reprovado(a)');
}