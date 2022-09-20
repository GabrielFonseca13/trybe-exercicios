let saldo = 100;
const msg = document.querySelector('.saldo');

function mostraSaldo() {
  msg.innerHTML = `Seu saldo atual é: ${saldo}`;
}

function saque(callback, valor) {
  setTimeout(() => {
    saldo -= valor;
    callback();
  }, 2005);
}

const enviarForm = (event) => {
  event.preventDefault();
  const valor = event.target[0].value;
  saque(mostraSaldo, valor);
};

