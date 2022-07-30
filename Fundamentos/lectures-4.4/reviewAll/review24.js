// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.


function biggestName (names){
    bigger = names[0];
    for (let index = 1; index < names.length; index += 1) {
        if (names[index].length > bigger.length){
            bigger = names[index]
        }        
    } return bigger;
}
console.log(biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));