const animalDescription = ({
  animalName,
  commonName,
  weightRange: { min, max, measurementUnit = 'kg' },
}) => {
  return `${commonName} (${animalName}) weighs around ${min}-${max} ${measurementUnit}`;
};

module.exports = { animalDescription };
