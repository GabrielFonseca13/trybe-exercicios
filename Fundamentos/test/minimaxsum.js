function birthdayCakeCandles(candles) {
  let biggestCandle = 0;
  let counter = 0;

  candles.sort((a, b) => a - b);
  biggestCandle = candles[candles.length - 1];

  candles.forEach((candle) => {
    if (candle === biggestCandle) {
      counter += 1;
    }
  })

  return counter;

}

birthdayCakeCandles([3,2,1,3]);