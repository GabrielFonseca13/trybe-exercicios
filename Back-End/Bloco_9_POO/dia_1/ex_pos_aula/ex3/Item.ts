class Item {
  private _orderName: string;

  private _price: number;


  constructor(on: string, p: number) {
    this._orderName = on;
    this._price = p;
  }

  public get orderName(): string {
    return this._orderName;
  }
  public set orderName(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }
    this._orderName = value;
  }

  public get price(): number {
    return this._price;
  }
  public set price(value: number) {
    if (value < 0) throw new Error('O Preço deve ser positivo');
    this._price = value;
  }

}

export default Item;