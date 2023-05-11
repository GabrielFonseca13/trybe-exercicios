import { ICar } from './interfaces';

export default class Car implements ICar {
  drive(): void {
    console.log('Drive a Car');
  }

  fly(): void {
    throw new Error('I dont fly!');
  }
}