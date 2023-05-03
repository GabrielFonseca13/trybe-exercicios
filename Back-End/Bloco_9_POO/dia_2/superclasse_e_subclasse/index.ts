class SuperClass {
  public isSUper: boolean

  constructor() {
    this.isSUper = true;
  };

  public sayHello(): void {
    console.log('Olá Mundo');
  }
}

class SubClass extends SuperClass {
  constructor() {
    super();
    this.isSUper = false;
  }
}

function myFunc(obj: SuperClass) {
  obj.sayHello();
  console.log(obj.isSUper ? 'Super!' : 'Sub!');
}
const objSuperClass = new SuperClass();
const objSubClass = new SubClass();


myFunc(objSuperClass);
myFunc(objSubClass);