const person = {
    name: 'Gabriel',
    age: 29,
    canDrive: true,
    adress: {
        city: 'Belo Horizonte',
        country: 'Brazil',
    }
};
 const hobbies = {
        timeDeFutebol: "atletico MG",
        idoloFutebol: 'Neymar',
        timeDeBasquete: 'GSW',
        idoloBasquete: 'Kobe Bryant',
 };

// // console.log(person);
// const keys = Object.keys(person);
// console.log(keys);

// // console.log(Object.keys(person).includes('fly'));
// // console.log(Object.values(person));
// console.log(Object.entries(person)[0][0]);
// console.log(Object.entries(person)[1][1]);

// const person2 = person; 
// console.log('PESSOA 1 ' + person, ' CÓPIA PESSOA 1 ' + person2);

// const person2 = Object.assign({}, person);
// console.log(person, person2);
// person.age = 12;
// console.log(person, person2);

Object.assign(person, hobbies);
console.log(person);