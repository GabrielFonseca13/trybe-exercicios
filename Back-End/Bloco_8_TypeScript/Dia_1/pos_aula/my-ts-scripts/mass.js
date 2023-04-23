// ./mass.ts
var units = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
function convert(value, fromUnit, toUnit) {
    var fromIndex = units.indexOf(fromUnit);
    var toIndex = units.indexOf(toUnit);
    var exponent = toIndex - fromIndex;
    return console.log( value * Math.pow(10, exponent));
}

convert(10, 'kg', 'g');