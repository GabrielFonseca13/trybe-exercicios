// Abbreviation object literal: https://www.javascripttutorial.net/es6/object-literal-extensions/

const createSuperhero = (name, superheroName, nickname, powers) => {
  return {
    name,
    superheroName,
    nickname,
    powers,
  };
};

// const meuSuperHeroi = createSuperhero('Bruce Wayne', 'Batman', 'Homem-Morcego', 'Determinação e dinheiro')
// meuSuperHeroi.name;


console.log(createSuperhero('Bruce Wayne', 'Batman', 'Homem-Morcego', 'Determinação e dinheiro'));
console.log(
  createSuperhero(
    'Dr. Robert Bruce Banner',
    'Hulk',
    'Gigante Verde',
    'super força ilimitada, resistência, durabilidade, imunidade e velocidade sobre-humanas'
  )
);
