// function userInfo() {
//     let userEmail = 'maria@email.com';
  
//     // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
//     console.log(userEmail);
//   }
//   userInfo();


// if (true) {
//     // inicio do escopo do if
//     var userAge = '20';
//     console.log(userAge); // 20
//     // fim do escopo do if
//   }
//   console.log(userAge); // 20

// Exemplos template literals

// const myName = 'Gabriel Dev';
// console.log(`Este é o Primeiro Template Literals de ${myName} !!`);

// const pessoa = {
//     nome: 'Micheli',
//     sobrenome: 'Santos',
//     idade: 27,
// }

// console.log(`Noiva: ${pessoa.nome}
// ${pessoa.sobrenome}. 
// Ano de nascimento: ${2022 - pessoa['idade']}`);

//ARROW FUNCTIONS

// const printName = function () {
//     const myName = 'Lucas';
//     return myName;
//   };
  
//   console.log(printName());

// const soma = (num1, num2) => num1 + num2;
// console.log(soma(123,312));

// function objetoPessoa(nome, idade){
//     return {
//         nome: nome,
//         idade: idade,
//     }
// }

// console.log(objetoPessoa('Gabriel', 29))

// const objetoPessoa = (nome, idade) => ({nome: nome, idade: idade});
// console.log(objetoPessoa('Gabriel', 29))

// OPERADOR TERNÁRIO 

// const checkIfElse = (age) => {
//     if (age >= 18){
//         return 'você tem idade para dirigir';
//     } else {
//         return 'você não tem idade para dirigir';
//     }
// };

// console.log(checkIfElse(17));

const checkIfElse = age => (
    age >= 18 ? 'VocÊ tem idade para dirigir' : 'Você não tem idade para dirigir'
)

console.log(checkIfElse(18));