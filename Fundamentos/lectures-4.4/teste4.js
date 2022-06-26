let usuario = {
    id: 99,
    email: 'jakeperalta@gmail.com',
    infoPessoal: {
        nome: 'Jake',
        sobrenome: 'Peralta',
        endereco: {
            rua: 'Smith Street',
            bairro: 'Brooklyn',
            cidade: 'Nova York',
            estado: 'Nova York',
        },
    },
};

console.log(usuario.infoPessoal.endereco.rua);
console.log(usuario['infoPessoal']['endereco']['rua']);