const readline = require('readline-sync');

// const weightInKg = 97.5
// const heightInCm = 185

const calcImc = (weight, height) => {
  
  console.log(`Peso: ${weight} KG, Altura: ${height} CM`);
  
  const heightInMeters = height / 100;
  const heightSquared = heightInMeters ** 2;

  const imc = weight / heightSquared;
  return imc;
}

const BMI_MAX_AND_MIN = {
  'Underweight': {
    minBMI: 0,
    maxBMI: 18.4,
  },
  'Normal Weight': {
    minBMI: 18.5,
    maxBMI: 24.9,
  },
  'Overweight': {
    minBMI: 25,
    maxBMI: 29.9,
  },
  'Obese Class I': {
    minBMI: 30.0,
    maxBMI: 34.9,
  },
  'Obese Class II': {
    minBMI: 35,
    maxBMI: 39.9,
  },
  'Obese Class III': {
    minBMI: 40,
    maxBMI: 100, 
  },
};

function handleBMIResult(bmi) {
  const statuses = Object.keys(BMI_MAX_AND_MIN); // ['Underweight', 'Normal Weight', 'Overweight'...]
  const resultFind = statuses.find((status) => {
    const { maxBMI, minBMI } = BMI_MAX_AND_MIN[status]; // acessamos as informações do intervalo da situação iterada

    return bmi >= minBMI && bmi <= maxBMI;
  });

  return resultFind;
}

const main = () => {
  const weight = readline.questionFloat('Insira o Peso em KG: ');
  const height = readline.questionInt('Insira a altura em CM: ');

  const imc = calcImc(weight, height)

  console.log(`IMC: ${imc.toFixed(2)}`);
};

const bmiResult = handleBMIResult(imc);
   console.log(bmiResult);
// }

main()
