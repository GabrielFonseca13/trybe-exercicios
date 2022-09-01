// 2 - Crie uma função sum, que dado um número ilimitado de parâmetros 
// retorna a soma desses parâmetros. 
// Ao chamar a função dessa forma : sum(4,5,6) o número 15 deve ser retornado.
// 
//Dica: use parâmetro rest.

const sum = (...params) => {
    const resultSum = params.reduce((acc, curr) => {
        return acc += curr;
    }, 0)
    return resultSum;
};

console.log(sum(4,5,6));

