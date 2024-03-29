// ########## PARAMETRO REST ################

const sum = (...args) => args.reduce((acc, curr) => acc + curr, 0);

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

function quantosParams(...args) {
    console.log('parâmetros:', args);
    return `Você passou ${args.length} parâmetros para a função.`;
  }

  console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
  console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.