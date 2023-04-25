var Car = /** @class */ (function () {
    function Car(brand, color, doors) {
        this._brand = brand;
        this._color = color;
        this._doors = doors;
    }
    Car.prototype.honk = function () {
        console.log("Buzinando: Bip Bip");
    };
    Car.prototype.turnOn = function () {
        console.log("carro ligado");
    };
    Car.prototype.turnOff = function () {
        console.log("carro desligado");
    };
    Car.prototype.speedUp = function () {
        console.log("acelerando o carro");
    };
    Car.prototype.speedDown = function () {
        console.log("desacelerando o carro");
    };
    Car.prototype.stop = function () {
        console.log("parando o carro");
    };
    Car.prototype.turn = function (direction) {
        console.log("virando o carro para a " + direction);
    };
    return Car;
}());
var car1 = new Car('Volkswagen Gol', 'branco', 4);
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
