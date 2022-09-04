// https://www.w3schools.com/jsref/prop_win_localstorage.asp

let pessoa = {
  nome: '',
  idade: 0,
};

const sessaoPrincipal = document.getElementById('principal');
const btnAdiciona = document.querySelector('.btnAdicionar');
const btnLimpar = document.querySelector('.btnLimpar');

btnAdiciona.addEventListener('click', adicionaPessoa);
btnLimpar.addEventListener('click', limpaLocalStorage);

function criaElemento(objeto) {
  const novoElemento = document.createElement('p');
  // Nome: Atanes - idade: 51
  novoElemento.innerText = 'Nome: ' + objeto.nome + ' - idade: ' + objeto.idade;

  sessaoPrincipal.appendChild(novoElemento);
}

function adicionaPessoa() {
  pessoa.nome = document.getElementById('nome').value;
  pessoa.idade = document.getElementById('idade').value;

  localStorage.setItem(pessoa.nome, JSON.stringify(pessoa));

  document.getElementById('nome').value = '';
  document.getElementById('idade').value = '';

  criaElemento(pessoa);
}

function limpaLocalStorage(){
  sessaoPrincipal.innerHTML = '<h1>Lista de pessoas</h1>';
  localStorage.clear();
}

window.onload = function () {
  if (localStorage.length > 0) {
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let objeto = JSON.parse(localStorage.getItem(key));
      criaElemento(objeto);
    }
  }
};

// Para sessionStorage é só mudar o localStorage para sessionStorage no código acima
