const teams = [
  {
    id: '2661b037-0c54-4921-ae7a-a8af717d3975',
    title: 'Desenvolvimento'
  },
  {
    id: 'f3b47d41-b510-4f87-b086-8fefc90b745c',
    title: 'Design'
  },
  {
    id: '840dfe02-259b-4c24-a9a6-f52209e077c2',
    title: 'Marketing'
  }
]

const users = [
  {
    id: 'f73ddc0e-be86-4722-8433-96d5473b1248',
    name: 'Augusto',
    age: 42,
    team: '2661b037-0c54-4921-ae7a-a8af717d3975',
    remote: false,
  },
  {
    id: 'e9fb0a0b-2639-4d41-8e5b-ab49610c2f7f',
    name: 'Ana',
    age: 22,
    team: 'f3b47d41-b510-4f87-b086-8fefc90b745c',
    remote: true,
  },
  {
    id: '41ecb133-2c93-4ec9-9095-a3934cc57eea',
    name: 'Yuri',
    age: 21,
    team: '840dfe02-259b-4c24-a9a6-f52209e077c2',
    remote: false,
  },
  {
    id: 'a0301eec-30b1-4775-8f31-4514ae6ab131',
    name: 'Maria',
    age: 34,
    team: '2661b037-0c54-4921-ae7a-a8af717d3975',
    remote: true,
  },
  {
    id: '1d1f8fa4-c709-42f6-bf9d-d037a33c938f',
    name: 'Jorge',
    age: 56,
    team: '2661b037-0c54-4921-ae7a-a8af717d3975',
    remote: true,
  },
];

// Apresentar a listagem das pessoas com seu respectivo time.
// Saida esperada: {pessoaNome} - time de {timeNome}

function getPeopleByTeam(peopleArray, teamsArray) {
  const peopleWithTeam = peopleArray.map((person) => {
    const foundTeam = teamsArray.find((team) => person.team === team.id)
    const teamName = foundTeam.title
    return `${person.name} - time de ${teamName}`
  })
  return peopleWithTeam
}

console.log(getPeopleByTeam(users, teams))
