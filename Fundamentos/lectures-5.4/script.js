// // exemplos de utilização do localStorage

// document.cookie = 'email=isabella@email.com';
// console.log(localStorage.length); // não possui nada salvo, então o retorno é o valor: 0
// localStorage.setItem('firstname', 'Adam'); // salva uma entrada com a key = 'firstname' e value = 'Adam'
// localStorage.setItem('lastname', 'Smith'); // salva uma entrada com a key = 'lastname' e value = 'Smith'
// console.log(localStorage.getItem('lastname')); // retorna o valor 'Smith'
// console.log(localStorage.length); // possui duas entradas, então o retorno é o valor: 2
// localStorage.removeItem('lastname'); // remove a entrada referente a key = 'lastname'
// console.log(localStorage.length); // possui uma entrada, então o retorno é o valor: 1
// localStorage.clear(); // limpa todas as entradas salvas em localStorage
// console.log(localStorage.length); // não possui nada salvo, então o retorno é o valor: 0


// // exemplos de utilização do sessionStorage.

// console.log(sessionStorage.length); // não possui nada salvo, então o retorno é o valor: 0
// sessionStorage.setItem('firstname', 'Adam'); // salva uma entrada com a key = 'firstname' e value = 'Adam'
// sessionStorage.setItem('lastname', 'Smith'); // salva uma entrada com a key = 'lastname' e value = 'Smith'
// console.log(sessionStorage.getItem('lastname')); // retorna o valor 'Smith'
// console.log(sessionStorage.length); // possui duas entradas, então o retorno é o valor: 2
// sessionStorage.removeItem('lastname'); // remove a entrada referente a key = 'lastname'
// console.log(sessionStorage.length); // possui uma entrada, então o retorno é o valor: 1
// sessionStorage.clear(); // limpa todas as entradas salvas em sessionStorage
// console.log(sessionStorage.length); // não possui nada salvo, então o retorno é o valor: 0

const myObj = {
    name: 'Link',
    age: 20,
  };
  
  // Precisamos transformar este objeto em uma string. Para isso, utilizamos a função `JSON.stringify()`.
  
  localStorage.setItem('myData', JSON.stringify(myObj));
  console.log(localStorage.getItem('myData'));?// imprimindo o valor na chave my data.
  
  // Como dito anteriormente, o `localStorage` armazena dados no formato chave e valor, sendo os valores sempre string. Para isso, precisamos passar como primeiro parâmetro do método `setItem()` o nome da chave, passamos `myData` e como segundo parâmetro, a função `JSON.stringify()` com o objeto-valor que queremos armazenar na chave `myData`. Feito isso, teremos salvo no `localStorage` um objeto com a chave `myData` e o valor `{ "name": "Link", "age": 20 }`.
  
  // Agora, precisamos recuperar o objeto armazenado, mas queremos ele no formato original e não como uma string. Para isso, utilizaremos a função `JSON.parse()`.
  
  const recoveredObject = JSON.parse(localStorage.getItem('myData'));
  
  // Utilizamos a função `JSON.parse()` para transformar a string que está armazenada no `localStorage` de volta para seu formato original, um objeto.
  
  console.log(recoveredObject); // { name: 'Link', age: 20 }