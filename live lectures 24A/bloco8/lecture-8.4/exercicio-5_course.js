// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra 'a' maiúscula ou minúscula.

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

function containsA() {
  return names.reduce(
    (accLetraA, nome) =>
      (accLetraA += nome
        .split('')
        .reduce((acc, letra) => (acc += (letra === 'a' || letra === 'A' ? 1 : 0)), 0)),
    0
  );
}
console.log(containsA());
