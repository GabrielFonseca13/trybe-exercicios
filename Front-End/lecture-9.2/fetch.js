// const fetch = require('node-fetch');

// const fetchJoke = () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   console.log(fetch(url));
// }

// fetchJoke();

//######## como o fluxo assíncrono não foi controlado, ela vai retornar o seu estado e não o dado requisitado. Promise { <pending> } 


// const fetch = require('node-fetch');

// const fetchJoke = () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data.value));
// }

// fetchJoke();

// ###### // ######### o .then() espera a resposta do fetch (ou o .then() anterior) ser concluída para começar a sua execução. Assim, nosso fluxo está controlado!

const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));
}

fetchJoke();

// Note que para forçar o erro retiramos o https:// do início da url.
// Algo deu errado :(
// TypeError: Only absolute URLs are supported

