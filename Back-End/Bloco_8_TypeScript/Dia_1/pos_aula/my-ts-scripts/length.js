// ./length.ts
var units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
function convert(value, fromUnit, toUnit) {
    var fromIndex = units.indexOf(fromUnit); // pegamos o index da unidade base no array
    var toIndex = units.indexOf(toUnit); // pegamos o index da unidade para a conversão
    var exponent = toIndex - fromIndex; // calculamos o expoente a partir da diferença dos index
    return value * Math.pow(10, exponent);
}
convert(10, 'km', 'm');
convert(10, 'hm', 'm');
convert(10, 'dam', 'm');
convert(10, 'm', 'm');
convert(10, 'dm', 'm');
convert(10, 'cm', 'm');
convert(10, 'mm', 'm');