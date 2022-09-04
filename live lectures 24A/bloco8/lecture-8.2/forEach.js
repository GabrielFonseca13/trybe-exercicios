// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// https://www.w3schools.com/jsref/jsref_foreach.asp
// Fazer o log de cada numero do array abaixo multiplicado por 3

const numeros = [12, 3, 5, 7, 123, 55, 90, 0, 13];

// Com for of
// for(let numero of numeros){
//   console.log(numero);
// }
const mostraNumeros = (numero)=>{
  console.log(numero);
}

// Com o forEach
numeros.forEach(mostraNumeros)


const estados = [
  'Acre',
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espírito Santo',
  'Goías',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraíma',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins',
];

// Fazer o log de todos os estados do array abaixo no formato
// 1 - Acre
// 2 - Alagoas

// Com FOR tradicional
console.log('Lista de estados brasileiros');
// for (index = 0; index < estados.length; index += 1) {
//   console.log(`${index + 1} - ${estados[index]}`);
// }

// Com forEach
estados.forEach((estado, index) => console.log(`${index + 1} - ${estado}`));

// Imprimir na tela todos os elementos do Array estados em caixa alta


// Apresentar o nome e a nota final de todas as pessoas estudantes que tiverem média final das notas
// das avaliações (avaliacao, projeto e trabalho em grupo) maior ou igual a 7
// mediaFinal = (avaliacao + projeto + trabalhoGrupo) / 3

const pessoasEstudantes = [
  { nome: 'Alexandre', avaliacao: 7, projeto: 5.5, trabalhoGrupo: 8 },
  { nome: 'Marcondes', avaliacao: 6, projeto: 7.5, trabalhoGrupo: 5 },
  { nome: 'Rodrigo', avaliacao: 8.5, projeto: 9, trabalhoGrupo: 7 },
  { nome: 'Marcella', avaliacao: 8, projeto: 7, trabalhoGrupo: 4 },
  { nome: 'Adriana', avaliacao: 9, projeto: 7, trabalhoGrupo: 7 },
  { nome: 'Marlene', avaliacao: 7.5, projeto: 8, trabalhoGrupo: 7 },
];

pessoasEstudantes.forEach();
