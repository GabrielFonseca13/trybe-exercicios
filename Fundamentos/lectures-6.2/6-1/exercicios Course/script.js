// Interrompa o comportamento padrão do botão submit utilizando o método preventDefault(). Nossa amiga Carol Silva nos contou um pouco sobre como fazer isso, lembra?

const btnsubmit = document.getElementById('btn1');

btnsubmit.addEventListener('click', (event)=>{
  event.preventDefault();
});