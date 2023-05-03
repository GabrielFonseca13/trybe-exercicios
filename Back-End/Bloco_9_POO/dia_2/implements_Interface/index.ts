interface Animal2 {
  name: string;
  age: number;

  getBirthDate(): Date;
}

class Bird2 implements Animal2 {
  constructor(
    public name: string,
    private birthDate: Date) { }

  get age() {
    var timeDiff = Math.abs(Date.now() - new Date(this.birthDate).getTime());
    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }

  getBirthDate() { return this.birthDate; }

  fly() { console.log(`${this.name} está voando!`); }
}

const parrot2 = new Bird2(
  'Papagaio',
  new Date(Date.parse('Aug 16, 2015')),
);

console.log(parrot2.age);
parrot2.fly();

/*
Saída (código executado em Mar/2022):
6
Papagaio está voando!
*/