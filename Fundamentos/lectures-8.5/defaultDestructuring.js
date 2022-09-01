//######### DEFAULT DESTRUCTURING ###############

const person1 = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

// const { nationality } = person1;

// console.log(nationality);

const { nationality1 = 'Brazilian' } = person1;
console.log(nationality1); // Brazilian

//######### DEFAULT DESTRUCTURING EM CONJUNTO COM ARRAY DESTRUCTURING ###############

const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0

//######### PARA FIXAR - DEFAULT DESTRUCTURING ###############

// Do jeito que está, quando passamos person para a função GetNationality o retorno é João is undefined. Ajuste a função GetNationality para que a chamada GetNationality(person) retorne João is Brazilian.

const getNationality = ({ firstName, nationality = "Brazilian" }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const { nationality = 'Brazilian'} = person;

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));