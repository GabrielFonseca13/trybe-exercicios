import { IAirplane } from "./interfaces";

export default class Airplane implements IAirplane {
  fly(): void {
    console.log('Fly a Airplane');
  }
  drive(): void {
    console.log('i dont drive');
  }

}