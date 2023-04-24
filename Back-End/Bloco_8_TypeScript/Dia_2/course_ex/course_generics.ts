type Address = {
  street: string,
  number: number | null,
}

type User = {
  name: string,
  email: string,
  password: string,
}

function stringToJson<T, U>(str: string, id: U): T & { id: U } {
  const result = JSON.parse(str);
  result.id = id;
  return result;
}

const user1 = stringToJson<User, number>('{"name":"André Soares","email":"andre@trybe.com","password":"senha_secreta"}', Date.now());

const address1 = stringToJson<Address, string>('{"street":"Rua Tamarindo","number":1}', '#01')


console.log(user1.name);
console.log(address1.street);
console.log(user1.id);
console.log(address1.id);

