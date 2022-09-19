const pokemons = [
  'ditto',
  'charmander',
  'bulbasaur',
  'squirtle',
  'pikachuuuu',
  'porygon',
  'mewtwo',
];

function append(data) {
  const ol = document.querySelector('ol');

  const li = document.createElement('li');
  const divNome = document.createElement('div');
  const divImage = document.createElement('div');
  const img = document.createElement('img');

  divNome.innerHTML = data.nome;
  img.src = data.imageUrl;
  divImage.appendChild(img);

  li.appendChild(divNome);
  li.appendChild(divImage);

  ol.appendChild(li);
}

function fetchPokemonJSON(nomePokemon) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`).then((respostaAPI) =>
    respostaAPI.json()
  );
}

function fetchPokemon(nomePokemon) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`)
    .then((respostaAPI) => respostaAPI.json())
    .then((objetoPokemon) => {
      const pokemon = { nome: objetoPokemon.name, imageUrl: objetoPokemon.sprites.front_default };
      append(pokemon);
    })
    .catch((erro) => console.log(erro));
}

function requestPokemons() {
  pokemons.forEach((pokemon) => fetchPokemon(pokemon));
  // fetchPokemon('pikachu');
  // fetchPokemon('bulbasaur');
  // fetchPokemon('squirtle');
}

function requestPokemonsOrdered() {
  const arrayDePromessas = pokemons.map((pokemon)=>fetchPokemonJSON(pokemon))
  Promise.all(arrayDePromessas)
    .then((pokemonList) => {
      pokemonList.forEach((pokemon) => {
        const pokemonObjeto = { nome: pokemon.name, imageUrl: pokemon.sprites.front_default };
        append(pokemonObjeto);
      });
    })
    .catch((erro) => console.log(erro));
}

async function fetchPokemonAsynAwait() {
  try {
    const pokemonList = [
      await fetchPokemonJSON('pikachu'),
      await fetchPokemonJSON('bulbasaur'),
      await fetchPokemonJSON('squirtle'),
    ];
    pokemonList.forEach((objetoPokemon)=>{
      const pokemonObjeto = { nome: objetoPokemon.name, imageUrl: objetoPokemon.sprites.front_default };
        append(pokemonObjeto);
    })
  } catch (error) {
    console.log(error.message);
  }
}

window.onload = fetchPokemonAsynAwait;
