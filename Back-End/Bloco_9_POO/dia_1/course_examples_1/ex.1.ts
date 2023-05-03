class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }

  turnOn() {
    console.log(`BRAND: ${this._brand}
    SIZE: ${this._size} Polegadas
    RESOLUTION: ${this._resolution}
    CONNECTIONS: ${this._connections}`);
  }

  get connectedTo(): string | undefined {
    return this._connectedTo;
  }

  set connectedTo(value: string | undefined) {
    // permite setar undefined ou uma conexão que esteja no `connections`
    if (!value || this._connections.includes(value)) {
      this._connectedTo = value;
      console.log(this._connectedTo);
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }
}

const tv1 = new Tv('Philco', 58, '4k', ['HDMI', 'ETHERNET', 'USB', 'BLUETOOTH']);

tv1.turnOn();

tv1.connectedTo = 'WI-FI';
console.log('Connected to: ', tv1.connectedTo);

tv1.connectedTo = 'HDMI';
console.log('Connected to: ', tv1.connectedTo);
