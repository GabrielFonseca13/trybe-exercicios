// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100;

// criar a função com 1 parametro(nota)
// criar as condições para converter a nota
// retornar erro em caso de notas inválidas


function converteNota(nota1){
    if (nota1 >=  90 && nota1 <= 100){
        return 'Nota A';
    } else if (nota1 < 90 && nota1>= 80){
        return 'Nota B';
    } else if (nota1 < 80 && nota1>= 70){
        return 'nota C';
    } else if (nota1 < 70 && nota1>= 60){
        return 'nota D';
    } else if (nota1 < 60 && nota1>= 50){
        return 'note E';
    } else if (nota1 < 50 && nota1>= 0){
        return 'nota F';
    } else {
        return 'Nota Inválida'
    }
}
console.log(converteNota(101));