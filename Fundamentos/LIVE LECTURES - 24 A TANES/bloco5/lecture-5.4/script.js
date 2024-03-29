//Resolução do exercicio da aula ao vivo
const borda = document.querySelector('.borda');
const bordaDupla = document.querySelector('.borda-dupla');
const bordaArredondada = document.querySelector('.borda-arredondada');
const bordaPontilhada = document.querySelector('.borda-pontilhada');

const infoMes = document.querySelector('.month-container');
const diasSemana = document.querySelector('.week-days');
const dias = document.querySelector('.days');

let bordaSelecionada = 'borda';

bordaDupla.addEventListener('click', function () {
  bordaSelecionada = 'borda-dupla';
});

bordaArredondada.addEventListener('click', function () {
  bordaSelecionada = 'borda-arredondada';
});

bordaPontilhada.addEventListener('click', function () {
  bordaSelecionada = 'borda-pontilhada';
});

borda.addEventListener('click', function () {
  bordaSelecionada = 'borda';
});

infoMes.addEventListener('click', function () {
  infoMes.className = 'month-container margen-geral ' + bordaSelecionada;
});

diasSemana.addEventListener('click', function () {
  diasSemana.className = 'week-days margen-geral ' + bordaSelecionada;
});

dias.addEventListener('click', function () {
  dias.className = 'days margen-geral ' + bordaSelecionada;
});

// - Fim da resolução

const btnHoliday = document.getElementById('btn-holiday');
btnHoliday.addEventListener('click', function () {
  const holidays = document.querySelectorAll('.holiday');
  for (let index = 0; index < holidays.length; index += 1) {
    if (holidays[index].style.backgroundColor === 'white') {
      holidays[index].style.backgroundColor = 'rgb(238,238,238)';
    } else {
      holidays[index].style.backgroundColor = 'white';
    }
  }
});

const fridayDays = [6, 13, 20, 27];
const btnFriday = document.getElementById('btn-friday');
btnFriday.addEventListener('click', function () {
  const fridays = document.getElementsByClassName('friday-day');
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerHTML !== 'SEXTOU!') {
      fridays[index].innerHTML = 'SEXTOU!';
    } else {
      fridays[index].innerHTML = fridayDays[index];
    }
  }
});

const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
const weekDaysList = document.querySelector('.week-days');

for (let index = 0; index < weekDays.length; index += 1) {
  let days = weekDays[index];

  let dayListItem = document.createElement('li');
  dayListItem.innerHTML = days;

  weekDaysList.appendChild(dayListItem);
}

const daysList = [];
for (index = 1; index < 31; index += 1) {
  daysList.push(index);
}

const getDaysList = document.querySelector('.days');

for (let index = 0; index < daysList.length; index += 1) {
  const day = daysList[index];
  const dayItem = document.createElement('li');
  if ((day === 2) | (day === 15)) {
    dayItem.className = 'holiday';
    dayItem.innerHTML = day;
    getDaysList.appendChild(dayItem);
  } else if ((day === 6) | (day === 13) | (day === 27)) {
    dayItem.className = 'friday-day';
    dayItem.innerHTML = day;
    getDaysList.appendChild(dayItem);
  } else if (day === 20) {
    dayItem.className = 'holiday friday-day';
    dayItem.innerHTML = day;
    getDaysList.appendChild(dayItem);
  } else {
    dayItem.innerHTML = day;
    getDaysList.appendChild(dayItem);
  }
}

// Função para alterar a cor de fundo de elementos html diferentes
function alteraCor(elementos, cor) {
  document.querySelector(elementos).style.backgroundColor = cor;
}


