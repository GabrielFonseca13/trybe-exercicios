const person = { 
    name: 'Gabriel',
    lastName: 'Fonseca',
    age: 29,
    height: 185,
};

const infos = {
    age: 27,
    job: 'Dev FullStack'
};

const family = {
    children: ['Kobe', 'Hanna'],
    wife: 'Micheli'
}

const fullInfo = Object.assign(person, infos, family);
// console.log(fullInfo);
console.log(person);