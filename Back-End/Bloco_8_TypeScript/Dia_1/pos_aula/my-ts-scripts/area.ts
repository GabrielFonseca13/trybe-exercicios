// ./area.ts

const areaUnits = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];

function areaConvert(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = areaUnits.indexOf(fromUnit);
  const toIndex = areaUnits.indexOf(toUnit);
  const exponent = toIndex - fromIndex;

  return value * Math.pow(100, exponent);
}

areaConvert(10, 'km²', 'm²');