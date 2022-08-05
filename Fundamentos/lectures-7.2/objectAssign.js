// const person = { 
//     name: 'Gabriel',
//     lastName: 'Fonseca',
//     age: 29,
//     height: 185,
// };

// const infos = {
//     age: 27,
//     job: 'Dev FullStack'
// };

// const family = {
//     children: ['Kobe', 'Hanna'],
//     wife: 'Micheli'
// }

// const fullInfo = Object.assign(person, infos, family);
// // console.log(fullInfo);
// // console.log(person);

// fullInfo.soccerTeam = 'Atlético Mineiro';

// console.log(person);


const person = {
    name:'Roberto',
  };
  
  const lastName = {
    lastName: 'Silva',
  };
  
  const newPerson = Object.assign({},person,lastName);
  newPerson.name = 'Gilberto';
  console.log(newPerson);
  console.log(person);