const readline = require('readline-sync');

const imcCalc = (peso, altura) => {
  console.log(`Peso : ${peso} KG / Altura ${altura}`);
  const alturaEmMetro = altura / 100;
  const alturaAoQuadrado = alturaEmMetro ** 2;
  const imcResult = peso / alturaAoQuadrado;
  return imcResult;
}

const IMC_MAX_E_MINIMO_POR_SITUACAO = {
  "Abaixo do peso (magreza)" : {
    minImc: 0,
    maxImc: 18.5
  },
  "Peso normal" : {
    minImc: 18.5,
    maxImc: 24.9
  },
  "Acima do peso (sobrepeso)" : {
    minImc: 25,
    maxImc: 29.9
  },
  "Obesidade grau I" : {
    minImc: 30,
    maxImc: 34.9
  },
  "Obesidade grau II" : {
    minImc: 35,
    maxImc: 39.9
  },
  "Obesidade grau III e IV" : {
    minImc: 40,
    maxImc: 100
  },
};

const verificaSituacaoImc = (imc) => {
  const situacoes = Object.keys(IMC_MAX_E_MINIMO_POR_SITUACAO);
  
  const localizaStatus = situacoes.find((situacao) => {
  const { minImc, maxImc } = IMC_MAX_E_MINIMO_POR_SITUACAO[situacao];
  const dentroDoMinimo = minImc ? imc > minImc : true;
  const dentroDoMaximo = maxImc ? imc < maxImc : true;

  return dentroDoMinimo && dentroDoMaximo;
})
  return localizaStatus;
};

const main = () => {
  const peso = readline.questionFloat('What’s your weight? ');
  const altura = readline.questionInt('What’s your height? ');
  const imc = imcCalc(peso, altura);
  const statusImc = verificaSituacaoImc(imc);
  console.log(`IMC = ${imc.toFixed(2)}`)
  console.log(`status Imc: ${statusImc}`)
}

main();
