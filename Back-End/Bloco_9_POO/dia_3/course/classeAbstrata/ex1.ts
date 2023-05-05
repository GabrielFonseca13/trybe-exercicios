abstract class Character {
  abstract talk2(): void;
  abstract specialMove(): void;
};

class MelleCharacter extends Character {
  constructor(private _name: string, private _specialMove: string) {
    super();
  }

  talk2(): void {
    console.log(`Hi I'm ${this._name} i cant attack from a long reange.`);
  }

  specialMove(): void {
    console.log(`${this._name} is using ${this._specialMove} !!!`)
  }
}

class LongRangeCharacter extends Character {
  constructor(private _name: string, private _specialMove: string) {
    super();
  }

  talk2(): void {
    console.log(`Hi I'm ${this._name} i can attack from a long reange.`);
  }

  specialMove(): void {
    console.log(`${this._name} is using ${this._specialMove} !!!`)
  }
}

const yoshi = new MelleCharacter('Yoshi', 'Super Dragon');
const samus = new LongRangeCharacter('Samus', 'Zero Laser');

const chars = (char: Character) => {
  char.talk2();
  char.specialMove();
}

chars(yoshi);
chars(samus);

