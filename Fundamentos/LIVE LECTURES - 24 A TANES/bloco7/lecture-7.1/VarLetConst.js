// O VAR usa o conceito de hoisting e por isso me permite declarar a variavel
// em qualquer lugar do código que o JavaScript vai "subir" a declaração para 
// o topo do código;

nome = 'Alexandre Atanes de Jesus';
console.log(nome);
var nome;

// No LET temos mais controle sobre a declaração das variáveis e não temos o efeito
// de Hoisting, sendo assim a variavel obrigatória mente precisa ser declara antes 
// de ser usada.

// Essa linha gera um erro do tipo 'idade não pode ser acessado antes de sua inicialização
let idade;
idade = 51;  
console.log(idade);

// Declarando a variavel antes de utiliza-la funciona tudo certinho como nesse código
let cidadeNatal = 'Santos/SP';
console.log(cidadeNatal);

// O VAR também traz problemas em relação ao escopo das variavéis, pois ele 'vaza' o
// escopo e pode ser acessado de qualquer lugar do código o que pode trazer uma série
// de complicações para a organização e manutenção do código.

// Escopo global
// var numero = 13;

// if(numero % 2 === 0){
//   // Escopo de bloco de decisão
//   var resultado = `Número é par`;
// } else{
//   var resultado = `Número é impar`;
// }

// console.log(resultado);

// Escopo global
let numero = 13;
let resultado = '';

if(numero % 2 === 0){
  // Escopo de bloco de decisão
  resultado = `Número é par`;
} else{
  resultado = `Número é impar`;
}
console.log(resultado);

// Gera um erro do tipo 'resultado não está definido' porque a variavel resultado
// só está visivel dentro do bloco do comando de decisão.
console.log(resultado);

// As variáveis do tipo CONST não podem ter seus valores re-atribuidos para um controle
// maior sobre valores que não podem sofrer nenhum tipo de alteração durante a execução
// do seu código.

const dataPagamento = '30';

// Essa linha gera um erro do tipo 'Atribuição a uma variavel do tipo constante' 
// porque a variavel está declarada como CONST e por isso seu valor não pode ser 
// alterado.
dataPagamento = 15;

// Variaveis do tipo CONST também precisam, obrigatóriamente, receber um valor na 
// sua declaração
const valorInicial;

// Para estruturas de dados declaradas como CONST é possivel fazer alterações nos
// dados internos, mas não na sua estrutura;

const pessoa = {
  nome: 'Atanes',
  idade: 51,
}
console.log(pessoa);

pessoa.idade = 52;
pessoa.cidadeNatal = 'Santos/SP';

console.log(pessoa);

// Essa linha vai gerar um erro porque estou tentando mudar o tipo da varaivel e não
// seu conteúdo interno
pessoa = [''];

const cidades = ['Santos', 'Bauru', 'Marilia', 'Botucatu'];
console.log(cidades);

cidades.push('Rio Claro');
console.log(cidades);

cidades.shift();
console.log(cidades);

cidades = {};


// Dentro de funções devemos usar variáveis com escopo de função para evitar erros
// de leitura dos parametros e valores

const arrayNumeros = [2, 7, 4, 8, 1, 0, 13, 100, 34, 55];

function separaParesImpares(numeros){
  let pares = [];
  let impares = [];

  for(numero of numeros){
    if(numero % 2 === 0){
      pares.push(numero);
    }else{
      impares.push(numero);
    }
  }
  return [pares, impares];
}

console.log(separaParesImpares(arrayNumeros));

