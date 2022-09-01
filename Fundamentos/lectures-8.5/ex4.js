// 🚀 4 - Escreva uma função filterPeople que, dada uma lista de pessoas, 
//retorna todas as pessoas australianas que nasceram no século 20:

// Dica: use object destructuring.


const people = [
    {
      name: 'Nicole',
      bornIn: 1992,
      nationality: 'Australian',
    },
    {
      name: 'Harry',
      bornIn: 2008,
      nationality: 'Australian',
    },
    {
      name: 'Toby',
      bornIn: 1901,
      nationality: 'Australian',
    },
    {
      name: 'Frida',
      bornIn: 1960,
      nationality: 'Dannish',
    },
    {
      name: 'Fernando',
      bornIn: 2001,
      nationality: 'Brazilian',
    },
  ];
  //bornIn: nascido em
  // { bornIn , nationality } = people; 
  // escreva filterPeople abaixo

  //####### RESOLUÇÃO DO GABARITO #######

const filterPeople = (arr) => arr.filter(
  ({ nationality, bornIn }) =>
  nationality === 'Australian'  && bornIn > 1900 && bornIn <= 2000,
);

  // ####### MINHA RESOLUÇÃO ###########
  // const filterPeople = (array) => {
  //   const bornCentury20 = array.filter((person) => (person.bornIn >= 1901 && person.bornIn <= 2000) && person.nationality === 'Australian');
  //   return bornCentury20;
  // };
  console.log(filterPeople(people));