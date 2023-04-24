"use strict";
exports.__esModule = true;
var employee = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName; // usamos o "this" para acessar as propriedades da interface
    }
};
var teacher = {
    firstName: "John",
    lastName: "Doe",
    subject: "Matemática",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    sayHello: function () {
        return "Ol\u00E1, eu sou " + this.fullName() + " e leciono " + this.subject;
    }
};
// Crie uma interface cujo objeto represente um Automóvel.
console.log('EXERCICIO 1 \n \n');
;
var car1 = {
    name: 'Elba',
    color: 'Branca',
    brand: 'Fiat',
    doors: 4,
    showDetails: function () {
        return "Detalhes do carro: nome: " + this.name + ", cor: " + this.color + ", marca: " + this.brand + ", quantidade de portas: " + this.doors + " ";
    }
};
console.log(car1);
console.log(car1.showDetails(), '\n');
// Crie uma interface cujo objeto represente um Felino.
console.log('EXERCICIO 2 \n \n');
;
var feline1 = {
    name: 'Pantera',
    localization: 'Brasil',
    weigh: 190,
    showDetails: function () {
        return "Detalhe: Nome do Felino: " + this.name + ", localiza\u00E7\u00E3o: " + this.localization + ", peso: " + this.weigh + " Kgs";
    }
};
console.log(feline1);
console.log(feline1.showDetails(), '\n');
// Crie uma interface cujo objeto represente uma Aeronave.
console.log('EXERCICIO 3 \n \n');
var aero1 = {
    nome: 'BS-28A',
    brand: 'American Airlines',
    passengersCapacity: 350,
    showDetails: function () {
        return "Detalhes da Aeronave " + this.nome + ": marca: " + this.brand + ", capacidade: " + this.passengersCapacity + " Passageiros";
    }
};
console.log(aero1);
console.log(aero1.showDetails(), '\n');
