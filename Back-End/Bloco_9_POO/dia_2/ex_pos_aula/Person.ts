class Person {
  protected MINIMUM_NAME_LENGTH = 3;
  protected MAXIMUM_AGE = 120;

  constructor(
    private _name: string,
    private _birthDate: Date
  ) {
    this.validatePerson();
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this.validateName(value);
    this._name = value;
  }

  public get birthDate(): Date {
    return this._birthDate;
  }

  public set birthDate(value: Date) {
    this.validateBirthDate(value);
    this._birthDate = value;
  }

  private validateName(name: string): void {
    if (name.length < this.MINIMUM_NAME_LENGTH) {
      throw new Error(`O nome deve conter no mínimo ${this.MINIMUM_NAME_LENGTH} caracteres.`)
    }
  }

  static getAge(date: Date): number {
    const diff = Math.abs(new Date().getTime() - date.getTime());
    const yearMs = 31_356_000_000;
    return Math.floor(diff / yearMs);
  }

  private validateBirthDate(birthDate: Date): void {
    if (birthDate.getTime() > new Date().getTime()) {
      throw new Error('A data de nascimento não pode ser uma data no futuro.')
    }
    if (Person.getAge(birthDate) > this.MAXIMUM_AGE) {
      throw new Error(`A pessoa deve ter no máximo ${this.MAXIMUM_AGE} anos.`)
    }
  }

  private validatePerson(): void {
    this.validateName(this._name);
    this.validateBirthDate(this._birthDate)
  }
}

const maria = new Person('Maria da Consolação', new Date('1980/01/25'));
const luiza = new Person('Luiza Andrade', new Date('2005/10/02'));
// const ya = new Person('Ya', new Date('1980/01/25'));

console.log(maria);
console.log(luiza);
// console.log(ya);

export default Person;