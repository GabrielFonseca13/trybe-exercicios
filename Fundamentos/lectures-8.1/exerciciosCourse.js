// 1 - Crie uma função que retorne a string 'Acordando!!';
const wakeUp = () => console.log(`Acordando!!`);

const breakFast = () => console.log(`Bora tomar Café`);

const sleep = () => console.log(`Partiu Dormir !!`);

const doingThings = (param) => param();

doingThings(wakeUp);
doingThings(breakFast);
doingThings(sleep);


// 2 - Crie outra função que retorne a string 'Bora tomar café!!';
// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!';
// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo:

