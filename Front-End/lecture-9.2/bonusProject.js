// Requisição da API.

const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';
  const coins = await fetch(url)
  .then((response) => response.json())
  .then((objectCoin) => objectCoin.data)
  .catch((error) => console.log(error));

  console.log(coins);
  return coins;
};

// fetchCoins();

// Inserindo as moedas na tela

// const setCoins = async () => {
//   const ul = document.getElementById('coins-list');
//   const coins = await fetchCoins();

//   coins.forEach((cryptos) => {
//     const li = document.createElement('li');
//     const price = Number(cryptos.priceUsd);
//     li.innerHTML = `Nome: ${cryptos.name} (${cryptos.symbol}) Preço: USD $${price.toFixed(2)}`;
//     ul.appendChild(li);
//   });
// };

const showOnly10 = async () => {
  const ul = document.getElementById('coins-list');
  const coins = await fetchCoins();

  coins.filter((crypto) => Number(crypto.rank) <= 10)
  .forEach((crypto) => {
    const li = document.createElement('li');
    const price = Number(crypto.priceUsd);
    li.innerText = `${crypto.name} (${crypto.symbol}): ${price.toFixed(2)}`;
    ul.appendChild(li);
  });
};

window.onload = () => showOnly10();
