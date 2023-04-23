
const capacityUnits: string[] = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

function capacityConvert(valor: number, unidadeBase: string, unidadeParaConversao: string): number {
  const indexRef = capacityUnits.indexOf(unidadeBase);
  console.log('indexRef', indexRef);

  const indexConv = capacityUnits.indexOf(unidadeParaConversao);
  console.log('indexConv', indexConv);

  const exponente = indexRef - indexConv;

  return valor * Math.pow(10, exponente);
};

capacityConvert(10, 'kl', 'l');
capacityConvert(10, 'hl', 'l');
capacityConvert(10, 'dal', 'l');
capacityConvert(10, 'l', 'l');
capacityConvert(10, 'dl', 'l');
capacityConvert(10, 'cl', 'l');
capacityConvert(10, 'ml', 'l');

