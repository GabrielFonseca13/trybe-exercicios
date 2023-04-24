// função que converte de string para json
function stringToJson(str) {
    var result = JSON.parse(str);
    return result;
}
// utilizando o "as" para converter de unknown para User
var user = stringToJson('{"name":"André Soares","email":"andre@trybe.com","password":"senha_secreta"}');
// Outra forma de usar o Assertion. A sintaxe é diferente mas tem o mesmo objetivo
var address = stringToJson('{"street":"Rua Tamarindo","number":1}');
console.log(user.name);
console.log(address.street);
// MAIS EXEMPLOS DE TYPE ASSERTIONS
var str = 'texto'; // simulando um valor supostamente desconhecido
// str.split(''); // Dispara um erro por aplicar um split em um tipo desconhecido
str.split(''); // Corrigindo o erro acima usando o 'as'
var num = '2';
// num as number // dispara um erro, pois não é possível usar Type Assertions com tipos incompatíveis
num; // Corrigindo o erro acima convertendo primeiramente para unknown
