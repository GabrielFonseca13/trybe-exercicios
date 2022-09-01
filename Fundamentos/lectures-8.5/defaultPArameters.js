// ###### DEFAULT PARAMETERS #####

// // função que noa recebe parametro.

// const greeting = (user) => console.log(`Welcome ${user}!`);

// greeting(); // Welcome undefined

// // ############## exemplo de correção sem default parameters ##########

// const greeting = (user) => {
//     const userDisplay = typeof user === 'undefined' ? 'pessoa usuária' : user;
//     console.log(`Welcome ${userDisplay}!`);
//   };
  
//   greeting(); // Welcome pessoa usuária!

// // ####### CORREÇÃO USANDO DEFAULT PARAMETERS ########

//   const greeting = (user = 'pessoa usuária') => console.log(`Welcome ${user}!`);
// greeting();
// greeting('jose'); // Teste para entender quando o parametro é passado

// ###### PARA FIXAR DEFAULT PARAMETERS #####

// Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro.

const multiply = (number , value = 1) => {
    return ` o Resultado da multiplicação é ${number * value}`
};

console.log(multiply(8)); // 8
console.log(multiply(8, 2)); // 16

