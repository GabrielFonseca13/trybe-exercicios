interface MyInterface {
  myNumber: number;

  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) { }

  myFunc(myParam: number) {
    const result = this.myNumber + myParam;
    return `a soma é ${result}`;
  }
}

const myObject = new MyClass(2);
console.log('my object', myObject);
console.log('my object.MyNuber', myObject.myNumber);
console.log('my object.MyFunc', myObject.myFunc(4));



