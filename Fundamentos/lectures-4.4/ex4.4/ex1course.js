let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
        bronze: 4,
    },
}

console.log('A Jogadora '+ player.name +' '+ player.lastname +'possui '+ player.medals.golden +' medalhas de ouro e '+ player.medals.silver +' medalhas de prata' );

player['bestInTheWorld'] = [2006,2007,2008,2009,2010,2018];
console.log('A jogadora '+ player['name'] +' '+ player['lastName'] +' foi eletira a melhor do mundo por '+ player['bestInTheWorld.length'] +' vezes. nos anos '+ player['bestInTheWorld']);

// console.log('A jogadora '+ player.name +' '+ player.lastName +' foi eletira a melhor do mundo por '+ player.bestInTheWorld.length +' vezes. nos anos '+ player.bestInTheWorld);


// console.log(player.name, player.lastName, player.age);
// console.log('A jogadora '+ player.name + ' '+ player.lastName+ ' tem '+ player.age+' anos de idade.');