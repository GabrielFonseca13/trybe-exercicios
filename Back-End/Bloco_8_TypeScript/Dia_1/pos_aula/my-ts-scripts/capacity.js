var capacityUnits = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];
function capacityConvert(valor, unidadeBase, unidadeParaConversao) {
    var indexRef = capacityUnits.indexOf(unidadeBase);
    var indexConv = capacityUnits.indexOf(unidadeParaConversao);
    var exponente = indexConv - indexRef;
    return console.log('Resultado: ', valor * Math.pow(10, exponente));

}
;
capacityConvert(10, 'kl', 'l');
capacityConvert(10, 'hl', 'l');
capacityConvert(10, 'dal', 'l');
capacityConvert(10, 'l', 'l');
capacityConvert(10, 'dl', 'l');
capacityConvert(10, 'cl', 'l');
capacityConvert(10, 'ml', 'l');
