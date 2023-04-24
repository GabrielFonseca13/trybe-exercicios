function stringToJson(str, id) {
    var result = JSON.parse(str);
    result.id = id;
    return result;
}
var user1 = stringToJson('{"name":"André Soares","email":"andre@trybe.com","password":"senha_secreta"}', Date.now());
var address1 = stringToJson('{"street":"Rua Tamarindo","number":1}', '#01');
console.log(user1.name);
console.log(address1.street);
console.log(user1.id);
console.log(address1.id);
