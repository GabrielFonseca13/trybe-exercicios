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

const soma = (num1, num2) => num1 + num2;
console.log(soma(123,312));