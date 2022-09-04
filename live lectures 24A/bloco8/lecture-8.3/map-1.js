// Links uteis:
// HoF MAP
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// O método map() invoca a função callback passada por argumento para cada elemento do Array
// e devolve um 'novo Array' como resultado.


// Apresentar a listagem das cervejas com sua descrição e valor.
// Saida esperada: Cerveja {descricaoCerveja} com o valor de R$ {valorCerveja}

const beers = [
  {
    code: 123,
    manufacturer: 'Urquell',
    description: 'Pilsner Urquell 500ML',
    price: 20,
    quantity: 200,
  },
  {
    code: 176,
    manufacturer: 'Schornstein',
    description: 'Schornstein Imperial 500ML',
    price: 35.99,
    quantity: 150,
  },
  {
    code: 122,
    manufacturer: 'Schornstein',
    description: 'Schornstein IPA 500ML',
    price: 18.99,
    quantity: 300,
  },
  {
    code: 323,
    manufacturer: 'Maniacs',
    description: 'Maniacs Craft Lager 355ML',
    price: 19.99,
    quantity: 500,
  },
  {
    code: 183,
    manufacturer: 'Leuven',
    description: 'Leuven Red ALE Knight 600ML',
    price: 25.99,
    quantity: 100,
  },
  {
    code: 129,
    manufacturer: 'Leuven',
    description: 'Leuven Witbier The Witch 500ML',
    price: 19.99,
    quantity: 200,
  },
  {
    code: 451,
    manufacturer: 'Lupulus',
    description: 'Lupulus Blanche 330ML',
    price: 29.99,
    quantity: 0,
  },
];

// Saida esperada: Cerveja {descricaoCerveja} com o valor de R$ {valorCerveja}


// const descricaoCerveja = (algumArray) => {
//   let cervejas = []
//   for (let index = 0; index < algumArray.length; index += 1) {
//     const elementoAtual = algumArray[index]
//     cervejas.push(`Cerveja ${elementoAtual.description} com o valor de R$ ${elementoAtual.price}`)
//   }
//   return cervejas
// }

const descricaoCerveja = (algumArray) => {
  return algumArray.map((element) => {
    return `Cerveja ${element.description} com o valor de R$ ${element.price}`
  })
}

console.log(descricaoCerveja(beers));



