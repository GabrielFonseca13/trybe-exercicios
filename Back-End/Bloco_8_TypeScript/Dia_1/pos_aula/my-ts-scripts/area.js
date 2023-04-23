// ./area.ts
var areaUnits = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];
function areaConvert(value, fromUnit, toUnit) {
    var fromIndex = areaUnits.indexOf(fromUnit);
    var toIndex = areaUnits.indexOf(toUnit);
    var exponent = toIndex - fromIndex;
    return console.log(value * Math.pow(100, exponent));
}
areaConvert(10, 'km²', 'm²');
