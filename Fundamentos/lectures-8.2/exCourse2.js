const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (name) => name.length === 5;

const name5 = names.find(findNameWithFiveLetters);

console.log(name5);