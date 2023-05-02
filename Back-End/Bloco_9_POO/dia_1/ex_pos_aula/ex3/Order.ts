import Client from "./Client";
import Item from "./Item";

class Order {
  private _client: Client;
  private _items: Item[] = [];
  private _paymentMethod: string;
  private _discount = 0;

  constructor(
    client: Client,
    items: Item[],
    paymentMethod: string,
    discount: number,
  ) {
    this._client = client;
    this._items = items;
    this._paymentMethod = paymentMethod;
    this._discount = discount;
  }

  public get client(): Client {
    return this._client;
  }
  public set client(value: Client) {
    this._client = value;
  }

  public get items(): Item[] {
    return this._items;
  }
  public set items(value: Item[]) {
    if (value.length === 0) {
      throw new Error('O pedido deve ter pelo menos um item.')
    }
    this._items = value;
  }

  public get paymentMethod(): string {
    return this._paymentMethod;
  }
  public set paymentMethod(value: string) {

    this._paymentMethod = value;
  }

  public get discount() {
    return this._discount;
  }
  public set discount(value) {
    if (value < 0) {
      throw new Error('O desconto nao pode ser um valor negativo')
    }
    this._discount = value;
  }

  calculateTotal(): number {
    return this._items
      .reduce((prevValue, item) => {
        const total = prevValue + item.price;
        return total;
      }, 0);
  }

  calculateTotalWithDiscount(): number {
    return this.calculateTotal() * (1 - this.discount);
  }
}

export default Order;
