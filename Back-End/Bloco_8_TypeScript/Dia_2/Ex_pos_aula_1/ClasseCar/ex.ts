class Car {
  _brand: string;
  _color: string;
  _doors: number;

  constructor(brand: string, color: string, doors: number) {
    this._brand = brand;
    this._color = color;
    this._doors = doors;
  }

  honk(): void {
    console.log(`Buzinando: Bip Bip`);
  }

  turnOn(): void {
    console.log(`carro ligado`);
  }

  turnOff(): void {
    console.log(`carro desligado`);
  }

  speedUp(): void {
    console.log(`acelerando o carro`);
  }

  speedDown(): void {
    console.log(`desacelerando o carro`);
  }

  stop(): void {
    console.log(`parando o carro`);
  }

  turn(direction: string): void {
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