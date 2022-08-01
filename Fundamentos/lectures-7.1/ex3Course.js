// Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let, const, arrow functions, template literals e ternary operator.
// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número inteiro e positivo N, representado por N!, é o produto de todos os seus antecessores até o número um. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha usando ternary operator.

const retornaFatorial = (numero) => {
    let fatorial = 1
    for (let index = 1; index <= numero ; index +=1){
        fatorial *= index
        // console.log(fatorial);
    }
    return fatorial
}

console.log(retornaFatorial(5));


// Bônus
// const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
// console.log(factorial(5));