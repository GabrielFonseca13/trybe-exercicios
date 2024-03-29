// ############ FILTER ##############


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

// const objPeople = [
//     { name: 'José', age: 21 },
//     { name: 'Lucas', age: 19 },
//     { name: 'Maria', age: 16 },
//     { name: 'Gilberto', age: 18 },
//     { name: 'Vitor', age: 15 },
//   ];

//   const canDrive = (arrayDePessoas) =>
//     arrayDePessoas.filter((pessoa) => pessoa.age >= 18);
//     console.log(canDrive(objPeople));
//    const cantDrive = (arrayDePessoas) => 
//    arrayDePessoas.filter((pessoa) => !(pessoa.age >= 18)); 
//    console.log(cantDrive(objPeople));

// const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

// const removeStudent = (nome, arraydePessoas) =>
//     arraydePessoas.filter((pessoa) => pessoa !=nome);

//     console.log(removeStudent('Ricardo', arrayMyStudents));

//################ MAP #####################

// const pessoas = ['Maria','Jose','Nilce','Rafael'];

// // const novasPessoas = pessoas.map((elemento) => elemento.toUpperCase());

// const novasPessoas = pessoas.map((elemento) => {
//     const registro = {};
//     registro.nome = elemento.toUpperCase();
//     registro.empresa = 'Trybe';
//     return registro;
// })

// console.log(novasPessoas);

// const persons = [
//     { firstName: 'Maria', lastName: 'Ferreira' },
//     { firstName: 'João', lastName: 'Silva' },
//     { firstName: 'Antonio', lastName: 'Cabral' },
//   ];

//   const personFullName = persons.map((elemento) => (`${elemento.firstName} ${elemento.lastName}`));
    
//  console.log(personFullName);

// const numbers = [1, 2, 3, 4, -5];
// const turnNegative = numbers.map ((elemento) => (elemento > 0) ? elemento * -1 : elemento);

// console.log(numbers);
// console.log(turnNegative);

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const newProductsList = (listProducts, listPrices) => {
    const novaLista = listProducts.map((element, index) => (
        {[element]: listPrices[index]}
    ));
    return novaLista;
};

console.log(newProductsList(products, prices));
// const listProducts = [{ Arroz: 2.99 },...]

const newListProducts = (arrayProducts, arrayPrices) => {
    const novalista = arrayProducts.map((produto, index) => ( 
        {[produto]: arrayPrices[index]}
    ));
    return novalista;
};
console.log(newListProducts(products, prices));