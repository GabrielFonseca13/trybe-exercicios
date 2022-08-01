// 🚀 Crie uma página com um contador de cliques
// Sua página deve conter:
// Um botão ao qual será associado um event listener;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.
let clickCount = 0;
const buttonTest = document.getElementById("buttonTest");
const textCountClick = document.getElementById("text");

buttonTest.addEventListener('click', () => textCountClick.innerHTML = clickCount += 1);

