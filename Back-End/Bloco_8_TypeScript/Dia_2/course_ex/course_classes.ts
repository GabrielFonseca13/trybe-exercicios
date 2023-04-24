// usamos a palavra reservada class para definir uma classe
class Person {
  name: string;
  birthDate: Date; // o tipo Date está presente no TypeScript assim como no JavaScript
  age: number;
  // aprenderemos mais sobre o construtor na próxima seção
  // considere-o como uma função utilizada para construir um objeto a partir da classe,
  // nele recebemos todos os dados necessários para construir um objeto de pessoa
  constructor(name: string, birthDate: Date, age: number,) {
    // usamos o this para acessar as propriedades da instância da classe,
    // ele representa a própria instância que estamos criando
    // atribuímos o valor do parâmetro recebido a propriedade da instância da classe
    this.name = name;
    this.birthDate = birthDate;
    this.age = age;
  }

  speak(): void {
    console.log(`${this.name} está falando.`);
  }

  eat(): void {
    console.log(`${this.name} está comendo.`)
  }

  walk(): void {
    console.log(`${this.name} está andando.`)
  }
}

const person1 = new Person("Jane Doe", new Date("1986-01-01"), 27);
const person2 = new Person("Jon Doe", new Date("1980-08-05"), 42);

console.log(person1);
person1.speak()

console.log(person2);
person2.walk();

person1.age = 23;
console.log(person1);

// Crie uma classe cujo objeto represente um Cachorro.
console.log('EXERCICIO 1');

class Dog {
  _nome: string;
  _raca: string;
  _porte: string;

  constructor(nome: string, raca: string, porte: string) {
    this._nome = nome;
    this._raca = raca;
    this._porte = porte;
  }

  showDogDetails(): void {
    console.log(`O nome do cachorro é ${this._nome}
    É um cão da raça ${this._raca},
    e É considerado um cão de porte ${this._porte}`);
  }
}

const dog1 = new Dog('Kobe', 'American Bully', 'Grande');
dog1.showDogDetails();

// Crie uma classe cujo objeto represente uma Casa.
console.log('EXERCICIO 2');

class Casa {
  _quartos: number;
  _cor: string;
  _preco: number | string;

  constructor(quartos: number, cor: string, preco: number | string) {
    this._quartos = quartos;
    this._cor = cor;
    this._preco = preco;
  }

  showCasaDetails(): void {
    console.log(`A casa tem ${this._quartos} Quartos,
    É uma casa de cor ${this._cor},
    e É uma casa avaliada em R$ ${this._preco} Reais`);
  }
}

const casa1 = new Casa(3, 'amarela', 1500000);
const casa2 = new Casa(2, 'verde', '1.500.000');
console.log(casa1);
casa1.showCasaDetails();

console.log(casa2);
casa2.showCasaDetails();

// Crie uma classe cujo objeto represente um Voo.
console.log('EXERCICIO 3');

class Voo {
  _origem: string;
  _destino: string;
  _preco: string | number;

  constructor(origem: string, destino: string, preco: string | number) {
    this._origem = origem;
    this._destino = destino;
    this._preco = preco;
  }

  showFlightDetails(): void {
    console.log(`O Voo tem origem em ${this._origem},
    o Destino é ${this._destino} 
    e o preço da passagem é R$ ${this._preco} `)
  }
}

const voo1 = new Voo('BH', 'RJ', 400);
const voo2 = new Voo('CWB', 'MAR', '200,00');

console.log(voo1);
voo1.showFlightDetails();

console.log(voo2);
voo2.showFlightDetails();