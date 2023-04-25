"use strict";
class Car {
    constructor(brand, color, doors) {
        this._brand = brand;
        this._color = color;
        this._doors = doors;
    }
    honk() {
        console.log(`Buzinando: Bip Bip`);
    }
    turnOn() {
        console.log(`carro ligado`);
    }
    turnOff() {
        console.log(`carro desligado`);
    }
    speedUp() {
        console.log(`acelerando o carro`);
    }
    speedDown() {
        console.log(`desacelerando o carro`);
    }
    stop() {
        console.log(`parando o carro`);
    }
    turn(direction) {
        console.log(`virando o carro para a ${direction}`);
    }
}
const car1 = new Car('Volkswagen Gol', 'branco', 4);
console.log('Buscando pessoa passageira \n\n');
car1.turnOn();
car1.speedUp();
car1.speedDown();
car1.turn('esquerda');
car1.speedUp();
car1.speedDown();
car1.turn('direita');
car1.turn('esquerda');
car1.turn('direita');
car1.speedUp();
car1.speedDown();
car1.turn('direita');
car1.speedUp();
car1.speedDown();
car1.stop();
car1.honk();
console.log('Pessoa passageira entra no carro \n\n');
car1.speedUp();
car1.speedDown();
car1.turn('direita');
car1.speedUp();
car1.speedDown();
car1.turn('esquerda');
car1.speedUp();
car1.speedDown();
car1.turn('direita');
car1.speedUp();
car1.speedDown();
car1.stop();
console.log('Pessoa passageira chegou ao destino \n\n');
car1.turnOff();
