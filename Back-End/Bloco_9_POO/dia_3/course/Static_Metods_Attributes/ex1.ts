abstract class Character2 {
  abstract talk(): void;
  abstract specialMove(): void;

  static characterPresentation(character: Character2): void {
    character.talk();
    character.specialMove();
  }
};

class MelleCharacter2 extends Character2 {
  constructor(private _name: string, private _specialMove: string) {
    super();
  }

  talk(): void {
    console.log(`Hi I'm ${this._name} i cant attack from a long reange.`);
  }

  specialMove(): void {
    console.log(`${this._name} is using ${this._specialMove} !!!`)
  }
}

class LongRangeCharacter2 extends Character2 {
  constructor(private _name: string, private _specialMove: string) {
    super();
  }

  talk(): void {
    console.log(`Hi I'm ${this._name} i can attack from a long reange.`);
  }

  specialMove(): void {
    console.log(`${this._name} is using ${this._specialMove} !!!`)
  }
}

const yoshi2 = new MelleCharacter2('Yoshi', 'Super Dragon');
const samus2 = new LongRangeCharacter2('Samus', 'Zero Laser');

Character2.characterPresentation(yoshi2);
Character2.characterPresentation(samus2);

export default Character2
