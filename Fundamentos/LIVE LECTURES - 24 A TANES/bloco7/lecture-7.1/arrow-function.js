// Função tradicional
function divisaoTradicional(n1, n2) {
  return n1 / n2;
}
// Função não nomeada / anonima
const divisaoAnonima = function (n1, n2) {
  return n1 / n2;
};
// Arrow Functions
const divisao = (n1, n2) => {
  let divisao;
  divisao = n1 / n2;
  return divisao;
}



console.log(divisaoArrow(18, 4));
// Arrow Function com retorno direto por ter só uma linha de execução
const divisaoArrow = (n1, n2) => n1 / n2;
// Outros exemplos de Arrow Functions
const nomeCompleto = (nome, sobreNome) => `Nome completo: ${nome} ${sobreNome}`;

const devolveObjeto = () => {
  return {nome:'Washington', idade: 25}
}

console.log(nomeCompleto('Pedro', 'Silva'));
// Usamos muito as Arrow Functions na manipulação de elementos do DOM, em Event Listener,
// por exemplo.
window.onload = () => {
  
  
  const button = document.getElementById('button');

  button.addEventListener('click', () => retorno('PEGADINHA DO MALANDRO! IÉ IÉ!!! 🤪'));
  const retorno = (texto) => alert(`O texto de retorno é esse ${texto}`);
};
// (texto) => alert(`O texto de retorno é esse ${texto}`);

// function (){

// }