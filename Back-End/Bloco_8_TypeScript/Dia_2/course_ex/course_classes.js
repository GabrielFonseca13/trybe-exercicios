// usamos a palavra reservada class para definir uma classe
var Person = /** @class */ (function () {
    // aprenderemos mais sobre o construtor na próxima seção
    // considere-o como uma função utilizada para construir um objeto a partir da classe,
    // nele recebemos todos os dados necessários para construir um objeto de pessoa
    function Person(name, birthDate, age) {
        // usamos o this para acessar as propriedades da instância da classe,
        // ele representa a própria instância que estamos criando
        // atribuímos o valor do parâmetro recebido a propriedade da instância da classe
        this.name = name;
        this.birthDate = birthDate;
        this.age = age;
    }
    Person.prototype.speak = function () {
        console.log(this.name + " est\u00E1 falando.");
    };
    Person.prototype.eat = function () {
        console.log(this.name + " est\u00E1 comendo.");
    };
    Person.prototype.walk = function () {
        console.log(this.name + " est\u00E1 andando.");
    };
    return Person;
}());
var person1 = new Person("Jane Doe", new Date("1986-01-01"), 27);
var person2 = new Person("Jon Doe", new Date("1980-08-05"), 42);
console.log(person1);
person1.speak();
console.log(person2);
person2.walk();
person1.age = 23;
console.log(person1);
// Crie uma classe cujo objeto represente um Cachorro.
console.log('EXERCICIO 1');
var Dog = /** @class */ (function () {
    function Dog(nome, raca, porte) {
        this._nome = nome;
        this._raca = raca;
        this._porte = porte;
    }
    Dog.prototype.showDogDetails = function () {
        console.log("O nome do cachorro \u00E9 " + this._nome + "\n    \u00C9 um c\u00E3o da ra\u00E7a " + this._raca + ",\n    e \u00C9 considerado um c\u00E3o de porte " + this._porte);
    };
    return Dog;
}());
var dog1 = new Dog('Kobe', 'American Bully', 'Grande');
dog1.showDogDetails();
// Crie uma classe cujo objeto represente uma Casa.
console.log('EXERCICIO 2');
var Casa = /** @class */ (function () {
    function Casa(quartos, cor, preco) {
        this._quartos = quartos;
        this._cor = cor;
        this._preco = preco;
    }
    Casa.prototype.showCasaDetails = function () {
        console.log("A casa tem " + this._quartos + " Quartos,\n    \u00C9 uma casa de cor " + this._cor + ",\n    e \u00C9 uma casa avaliada em R$ " + this._preco + " Reais");
    };
    return Casa;
}());
var casa1 = new Casa(3, 'amarela', 1500000);
var casa2 = new Casa(2, 'verde', '1.500.000');
console.log(casa1);
casa1.showCasaDetails();
console.log(casa2);
casa2.showCasaDetails();
// Crie uma classe cujo objeto represente um Voo.
console.log('EXERCICIO 3');
var Voo = /** @class */ (function () {
    function Voo(origem, destino, preco) {
        this._origem = origem;
        this._destino = destino;
        this._preco = preco;
    }
    Voo.prototype.showFlightDetails = function () {
        console.log("O Voo tem origem em " + this._origem + ",\n    o Destino \u00E9 " + this._destino + " \n    e o pre\u00E7o da passagem \u00E9 R$ " + this._preco + " ");
    };
    return Voo;
}());
var voo1 = new Voo('BH', 'RJ', 400);
var voo2 = new Voo('CWB', 'MAR', '200,00');
console.log(voo1);
voo1.showFlightDetails();
console.log(voo2);
voo2.showFlightDetails();
