// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
// O método toLocaleString() retorna uma string com uma representação sensível a linguagem deste número.
const { cervejas, clientes } = require('./dados');

// Verificar quantos clientes são maior de idade e quantos são menor de idade

const clientesPorIdade = clientes.reduce(
  (acc, cliente) => {
    if (cliente.idade < 18) {
      acc['menorIdade']++;
    } else {
      acc['adulto']++;
    }
    return acc;
  },
  { adulto: 0, menorIdade: 0 }
);

console.log(clientesPorIdade);

// Retornar um array de objetos com a descrição das cervejas e o valor total em estoque de cada cerveja:
// Exemplo: valorEmEstoqueDeCervejas: {codigo:176, descricao:Pilsner Urquell 500ML, valor_em_estoque: R$ 4.000,00}

const valorEmEstoqueDeCervejas = cervejas.reduce(() => {}, []);

console.log(valorEmEstoqueDeCervejas);

// Separar as cervejas por fabricante

const cervejasProFabricante = cervejas.reduce(() => {}, {});

console.log(cervejasProFabricante);
