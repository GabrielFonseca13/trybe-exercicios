// 🚀 Altere as variáveis para respeitarem o escopo em que foram declaradas.
// Modifique a estrutura da função para que ela seja uma arrow function;
// Modifique as variáveis para que respeitem o escopo onde estão declaradas;
// Modifique as concatenações para template literals.



const testingScope = (escopo) => escopo === true ? 'Não devo ser utilizada fora do meu escopo (if), ótimo, fui utilizada no escopo !' : 'Não devo ser utilizada fora meu escopo (else)';
// if (escopo === true) {
    //   let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    //   ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    //   console.log(ifScope);
    // } else {
    //   let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    //   console.log(elseScope);
    // }
    
    //console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
  

  console.log(testingScope(true));