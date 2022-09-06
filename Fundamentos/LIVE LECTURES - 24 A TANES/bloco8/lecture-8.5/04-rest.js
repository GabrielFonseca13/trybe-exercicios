// Faça uma função que obtenha seis dados de data-hora (ano, mês, dia, hora, minuto, segundo) e retorne os dados da data e hora formatados.
const dateInfo = ['1988', '2', '1', '20', '01', '13'];

function formatDate(ano, mes, dia, ...horario) {
  // console.log(horario);
  return `${dia}/${mes}/${ano} - ${horario.join(':')}`
}
console.log(formatDate(...dateInfo));
module.exports = { formatDate, dateInfo };









// Obs.: Consideramos SPREAD quando usamos os ... na chamada da função
// e REST quando usamos como parametro de uma função, ou seja, na
// sua construção.
