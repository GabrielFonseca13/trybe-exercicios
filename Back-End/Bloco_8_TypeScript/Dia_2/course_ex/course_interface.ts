import { arch } from "os";

interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
}

let employee: Employee = {
  firstName: "John",
  lastName: "Doe",
  fullName(): string {
    return this.firstName + " " + this.lastName; // usamos o "this" para acessar as propriedades da interface
  }
}

// employee.firstName = 10;  // Error: Type "number" is not assignable to type "string"

interface Teacher extends Employee {
  subject: string;
  sayHello(): string;
}

let teacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  subject: "Matemática",
  fullName(): string {
    return this.firstName + " " + this.lastName;
  },
  sayHello(): string {
    return `Olá, eu sou ${this.fullName()} e leciono ${this.subject}`;
  }
}

// Crie uma interface cujo objeto represente um Automóvel.
console.log('EXERCICIO 1 \n \n');
interface Automovel {
  name: string;
  color: string;
  brand: string;
  doors: number;
  showDetails(): string;
};

let car1: Automovel = {
  name: 'Elba',
  color: 'Branca',
  brand: 'Fiat',
  doors: 4,
  showDetails(): string {
    return `Detalhes do carro: nome: ${this.name}, cor: ${this.color}, marca: ${this.brand}, quantidade de portas: ${this.doors} `;
  }
}
console.log(car1);
console.log(car1.showDetails(), '\n');

// Crie uma interface cujo objeto represente um Felino.
console.log('EXERCICIO 2 \n \n');

interface Feline {
  name: string,
  localization: string,
  weigh: number,
  showDetails(): string,
};

const feline1: Feline = {
  name: 'Pantera',
  localization: 'Brasil',
  weigh: 190,
  showDetails(): string {
    return `Detalhe: Nome do Felino: ${this.name}, localização: ${this.localization}, peso: ${this.weigh} Kgs`;
  },
}

console.log(feline1);
console.log(feline1.showDetails(), '\n');

// Crie uma interface cujo objeto represente uma Aeronave.
console.log('EXERCICIO 3 \n \n');

interface Aeronave {
  nome: string;
  brand: string;
  passengersCapacity: number;
  showDetails(): string;
}

const aero1: Aeronave = {
  nome: 'BS-28A',
  brand: 'American Airlines',
  passengersCapacity: 350,
  showDetails(): string {
    return `Detalhes da Aeronave ${this.nome}: marca: ${this.brand}, capacidade: ${this.passengersCapacity} Passageiros`;
  }
}

console.log(aero1);
console.log(aero1.showDetails(), '\n');