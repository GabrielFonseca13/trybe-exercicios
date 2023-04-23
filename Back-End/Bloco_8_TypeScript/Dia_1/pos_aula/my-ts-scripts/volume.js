var volumeUnits = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];
function volumeConvert(value, fromUnit, toUnit) {
    var fromIndex = volumeUnits.indexOf(fromUnit);
    var toIndex = volumeUnits.indexOf(toUnit);
    var exponent = toIndex - fromIndex;
    var result = value * Math.pow(100, exponent);
    return console.log(result);
}
