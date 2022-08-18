// const arr = ['ana', 'luiz', 'gabriel'];

// arr.filter((element, index, arrayCompleto) => {
//     console.log(element,index,arrayCompleto);
// });

// const notasAlunos = [
//     {    
//     nome: 'Gabriel',
//     nota: 100
//     },
//     {    
//     nome: 'Micheli',
//     nota: 90
//     },
//     {    
//     nome: 'Daniel',
//     nota: 75
//     },
//     {    
//     nome: 'Luiz',
//     nota: 79
//     },
//     {    
//     Nome: 'Nando',
//     nota: 80
//     }
// ];

// const alunosAprovados = notasAlunos.filter((element) => element.nota >= 80);
// console.log(alunosAprovados);

// const alunosReprovados = notasAlunos.filter((element) => !(element.nota >= 80));
// console.log(alunosReprovados);

const objPeople = [
    { name: 'José', age: 21 },
    { name: 'Lucas', age: 19 },
    { name: 'Maria', age: 16 },
    { name: 'Gilberto', age: 18 },
    { name: 'Vitor', age: 15 },
  ];

  const canDrive = (arrayDePessoas) =>
    arrayDePessoas.filter((pessoa) => pessoa.age >= 18);
    console.log(canDrive(objPeople));
   const cantDrive = (arrayDePessoas) => 
   arrayDePessoas.filter((pessoa) => !(pessoa.age >= 18)); 
   console.log(cantDrive(objPeople));