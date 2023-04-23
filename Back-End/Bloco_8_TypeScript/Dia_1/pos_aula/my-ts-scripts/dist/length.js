"use strict";
// ./length.ts
const lengthUnits = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
function lengthConvert(value, fromUnit, toUnit) {
    const fromIndex = lengthUnits.indexOf(fromUnit); // pegamos o index da unidade base no array
    const toIndex = lengthUnits.indexOf(toUnit); // pegamos o index da unidade para a conversão
    const exponent = toIndex - fromIndex; // calculamos o expoente a partir da diferença dos index
    return value * Math.pow(10, exponent);
}
lengthConvert(10, 'km', 'm');
lengthConvert(10, 'hm', 'm');
lengthConvert(10, 'dam', 'm');
lengthConvert(10, 'm', 'm');
lengthConvert(10, 'dm', 'm');
lengthConvert(10, 'cm', 'm');
lengthConvert(10, 'mm', 'm');
