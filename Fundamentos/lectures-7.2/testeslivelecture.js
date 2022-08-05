const person = {
    name: 'Gabriel',
    age: 29,
    canDrive: true,
    adress: {
        city: 'Belo Horizonte',
        country: 'Brazil',
    }
};

// // console.log(person);
// const keys = Object.keys(person);
// console.log(keys);

console.log(Object.keys(person).includes('fly'));

