let conta = {
    agencia: '0001',
    banco: {
        cod: '012',
        id: '4',
        nome: 'TrybeBank',
    },
};

// let infoDoBanco = 'banco';
console.log(conta['banco']);
console.log(conta.banco.id);

console.log(conta.agencia);
console.log(conta['agencia']);

console.log(conta.banco.cod);
console.log(conta['banco']['id']);