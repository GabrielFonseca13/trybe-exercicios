// Links uteis:
// HoF FILTER
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// O método filter() cria um novo array com todos os elementos que passaram no teste 
// implementado pela função fornecida.


// Desenvolver uma função que filtre um array de água

// Com "for" tradicional
const clayFilterOld = arr => {
  let aguaFiltrada = []
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] === '💧') {
        aguaFiltrada.push(arr[index])
      }
    }
  return aguaFiltrada
}
      
      
      
// Com filter()
const muddyWater = ['💧', '💧', '🪨', '💧', '🌱', '🌱', '💧'];


const clayFilterMuitoElegante = arr => {
  return arr.filter(particle => particle === '💧')
}


// console.log(clayFilter(muddyWater));



// Desenvolver uma função que filtre um array de pessoas por time
const users = [
  {
    id: 'f73ddc0e-be86-4722-8433-96d5473b1248',
    name: 'Augusto',
    age: 42,
    team: 'Desenvolvimento',
    remote: false,
  },
  {
    id: 'e9fb0a0b-2639-4d41-8e5b-ab49610c2f7f',
    name: 'Ana',
    age: 22,
    team: 'Design',
    remote: true,
  },
  {
    id: '41ecb133-2c93-4ec9-9095-a3934cc57eea',
    name: 'Yuri',
    age: 21,
    team: 'Marketing',
    remote: false,
  },
  {
    id: 'a0301eec-30b1-4775-8f31-4514ae6ab131',
    name: 'Maria',
    age: 34,
    team: 'Desenvolvimento',
    remote: true,
  },
  {
    id: '1d1f8fa4-c709-42f6-bf9d-d037a33c938f',
    name: 'Jorge',
    age: 56,
    team: 'Desenvolvimento',
    remote: true,
  },
];

function filterPeopleByTeam(array, team) {
  return array.filter((element) => element.team === team)
}
console.log(filterPeopleByTeam(users, 'Agile'))
