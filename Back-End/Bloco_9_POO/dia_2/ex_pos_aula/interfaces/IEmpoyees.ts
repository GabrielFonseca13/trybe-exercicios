interface IEmployee {
  registration: string;
  salary: number;
  adimissionDate: Date;

  generateRegistration(): String;
}

const testInterfaceEmployee = {
  salary: 1200.00,
  admissionDate: new Date(),
  registration: 'FNC1234567891011',

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `FNC${randomStr}`;
  }
}

console.log(testInterfaceEmployee);
console.log(testInterfaceEmployee.generateRegistration());
