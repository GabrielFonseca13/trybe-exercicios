// 🚀 Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
//criar a função com 3 parametros 

// retornar true se representar os angulos internos de um triangulo 

// retornar false se nao representar os angulso internos de um triangulo

// retornar mensagem de erro caso algum angulo seja negativo (invalido)

function verifyTriangle(angle1,angle2,angle3){
    if (angle1< 0 || angle2 < 0 || angle3 < 0){
        return 'Error: Ângulo recebido inválido';
    } else if(angle1 + angle2 + angle3 === 180){
        return true;
    } else if (angle1 + angle2 + angle3 !== 180){
        return false;
    }
}
console.log(verifyTriangle(130,20,30));