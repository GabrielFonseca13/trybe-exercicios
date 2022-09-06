// https://developer.mozilla.org/pt-BR/docs/Web/API/Node/appendChild
// https://www.w3schools.com/jsref/met_node_appendchild.asp

// Como pegar o pai dos elementos que eu quero adicionar a minha página?
let divFirst = document.getElementById('first');
let main = divFirst.parentElement;

// Como podemos criar um elemento HTML?
let novaDiv = document.createElement('div');
let div2 = document.createElement('div');
let div3 = document.createElement('div');
let paragrafo = document.createElement('p');
let divSecond = document.createElement('section');

// Como podemos modificar esse elemento, adicionando classes CSS para ele, por exemplo!?
novaDiv.className = 'blue square small';
div2.className = 'green circle small';
div3.className = 'yellow square small';
paragrafo.innerText = 'Turma 24 é a melhor!!';
divSecond.className = 'main-box';

// Como efetivamos a inclusão do elemento criado ao HTML e deixando ele visivel na página?
divFirst.appendChild(novaDiv);
divFirst.appendChild(div2);
divFirst.appendChild(div3);
divFirst.appendChild(paragrafo);
main.appendChild(divSecond);

main.appendChild(criarElemento('p','destaque', 'Alexandre Atanes'));
main.appendChild(criarElemento('div', 'big yellow square', null));
// Posso continuar alterando o elemento via código?
div2.classList.remove('small');
div2.classList.add('medium');

// Como posso remover um elemento do HTML via código?

// Vamos deixar nosso código mais organizado criando funções para matar a 'repetição'de código
function criarElemento(elemento, classes, texto){
  let newElement = document.createElement(elemento);
  newElement.innerText = texto;
  newElement.className = classes;
  return newElement;
}

// Habilidades e funções vistas nessa aula:
// createElement;
// appendChild;
// removeChild;
// parentNode;
// childNodes; (Devolve todos os Nodes (nós) da página)
// children; (Devolve todos os elementos HTML)
// firstChild; (Pega o primeiro Node (nó) filho)
// firstElementChild; (Pega o primeiro elemento HTML filho)
// lastChild;
// lastElementChild;
// nextSibling
// nextElementSibling;
// previousSibling
// previousElementSibling;


// https://www.w3schools.com/jsref/met_node_insertbefore.asp
// https://pt.stackoverflow.com/questions/6553/como-inserir-um-elemento-entre-dois-elementos
// Exemplo para inserir um elemento entre outros elementos já existentes na página
// div.insertAdjacentElement('beforeBegin', div3);