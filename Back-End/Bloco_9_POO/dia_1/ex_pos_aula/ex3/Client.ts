class Client {
  private _nome: string;

  constructor(n: string) {
    this._nome = n;
  }

  public get nome(): string {
    return this._nome;
  }
  public set nome(value: string) {
    if (value.length < 3) {
      throw new Error('O nome de conter no minimo 3 caracteres');
    }
    this._nome = value;
  }
}

export default Client;