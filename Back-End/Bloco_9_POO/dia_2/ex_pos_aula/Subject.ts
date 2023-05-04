class Subject {
  private MINIMUN_LENGTH_NAME: number = 3;

  constructor(private _name: string) {
    this.name = _name
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this.validateName(value);
    this._name = value;
  }

  private validateName(name: string): void {
    if (name.length < this.MINIMUN_LENGTH_NAME) {
      throw new Error(`O nome da matéria precisa ter no mínimo ${this.MINIMUN_LENGTH_NAME} caracteres.`)
    }
  }
}

const newSbuject = new Subject('Geografia');
// const invalidNewSubject = new Subject('Os');

console.log(newSbuject);
// console.log(invalidNewSubject);
