const volumeUnits = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];

function volumeConvert(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = volumeUnits.indexOf(fromUnit);
  const toIndex = volumeUnits.indexOf(toUnit);
  const exponent = toIndex - fromIndex;

  return value * Math.pow(1000, exponent);
}

console.log(volumeConvert(10, 'hm³', 'mm³'));