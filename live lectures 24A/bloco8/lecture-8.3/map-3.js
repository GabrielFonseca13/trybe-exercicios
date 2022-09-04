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

// Retorne os nomes das cervejas em um novo array, em caixa alta
console.log(beers.map((beer) => beer.description.toUpperCase()))