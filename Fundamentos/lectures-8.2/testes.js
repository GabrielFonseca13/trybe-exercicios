// // const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
// arrayOfValues.forEach((element, indexOfTheArray, theEntireArray) => {
//   console.log('Cada elemento do array:', element);
//   console.log('Index, posição do elemento:', indexOfTheArray);
//   console.log('Array percorrido:', theEntireArray);
// });

// let multiplicadores = [1,2,3,4,5,6,7,8,9,10];
// console.log('### TABUADA DE 2 ###')
// multiplicadores.forEach((item) => {
//     console.log(`${item} X 2 é igual a : ${item *2}`) 
// });

// const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

// const convertToUpperCase = (name, index) => {
//   names[index] = name.toUpperCase();
// };

// names.forEach(convertToUpperCase);
// console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]

// const emailListInData = [
//     'roberta@email.com',
//     'paulo@email.com',
//     'anaroberta@email.com',
//     'fabiano@email.com',
//   ];
  
//   const showEmailList = (email)const emailListInData = [
//   'roberta@email.com',
//   'paulo@email.com',
//   'anaroberta@email.com',
//   'fabiano@email.com',
// ];

// const showEmailList = (email) => {
//   console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
// };

// // Adicione seu código aqui => {
//     console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
//   };
  
// emailListInData.forEach(showEmailList);

const arrayDeNumeros = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

arrayDeNumeros.forEach((elemento) => (elemento % 2 === 0) ? console.log(elemento) : console.log(''));

const pares = document.getElementById('pares');

window.onload = () => {
  arrayDeNumeros.forEach((elemento) => {
     const novoNumero = document.createElement('p');
    novoNumero.innerHTML = (elemento % 2 === 0) ? `${elemento}` : ` `;
  pares.appendChild(novoNumero);
  })
};
