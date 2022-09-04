let n1 = Math.floor(Math.random() * 60) + 1;
let n2 = Math.floor(Math.random() * 60) + 1;
let n3 = Math.floor(Math.random() * 60) + 1;
let n4 = Math.floor(Math.random() * 60) + 1;
let n5 = Math.floor(Math.random() * 60) + 1;
let n6 = Math.floor(Math.random() * 60) + 1;

let numerosMegaSena = [n1, n2, n3, n4, n5, n6];

let meusNumeros = [11, 31, 24, 7, 59, 33];

let numeroAcertos = 0;

for (let indexMega = 0; indexMega < numerosMegaSena.length; indexMega += 1) {
  // console.log('Numero mega Sena:', numerosMegaSena[indexMega]);
  for (let indexAposta = 0; indexAposta < meusNumeros.length; indexAposta += 1) {
    // console.log('Numero aposta', meusNumeros[indexAposta]);
    if (numerosMegaSena[indexMega] === meusNumeros[indexAposta]) {
      numeroAcertos += 1;
      console.log('Acertou.....', meusNumeros[indexAposta]);
    }
  }
}
console.log('Números Mega Sena', numerosMegaSena);
console.log('Nossa Aposta', meusNumeros);
console.log('Acertos totais:', numeroAcertos);

// console.log(Math.max(13, 4, 24));

// let arrayNumeros = [1, 6 , 7, 3, 8];
// let soma = 0;

// for(index = 0; index < arrayNumeros.length;index += 1){
//   soma += arrayNumeros[index];
// }
// console.log(soma);

// soma = soma + 2;