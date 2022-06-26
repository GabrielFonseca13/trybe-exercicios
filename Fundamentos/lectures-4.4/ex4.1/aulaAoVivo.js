let person = {
    name: 'Gabriel',
    lastname: 'Fonseca',
    age: 29,
    canDrive: true,
    favoriteMovies: ['Avengers', 'Harry Potter', 'Marley e Eu'],
    address: {
        street: 'Rua parara pororo',
        number: 123,
        city: 'Los Angeles'
    }
};

//Notação por ponto (dot.notation) =>  object.property
// console.log(person.address.street);

//Notação por colchetes (bracket notatios)  => object['propertyName']
// console.log(person['address']['street']);

// // iterações para acessar todas as propriedades do objeto
// for (let key in person){
//     console.log(key, person[key]);
// }

//inserir nova propriedade dentro do Objeto
person.favoriteSingers = ['Bruno Mars', 'Djonga', 'Emicida', 'Justin Bieber'];
person['favoriteColor'] = ['Verde'];

console.log(person); 