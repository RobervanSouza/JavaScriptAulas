function birthdayCakeCandles(candles) {
  let bigCandle = 0;
  let count = 0;

  candles.sort((a, b) => b - a); // colocar em ordem crescente, descrecente e array.length-1 ou 
  bigCandle = candles[0]; // recebe  o maior valor

  candles.forEach((candle) => { // para cadas um das posições então soma mais um
    if(candle === bigCandle){ // o bigcandle trouxe o maior valor = 3 então pergunta. 3=3, se for soma, 3=2, 3=1, 3=3 se for então conta
      count += 1;
    }
  });

  return count;
};

console.log(birthdayCakeCandles([3, 2, 1, 3])); // qual a mairo e quantas vezes aparece

//candles.sort((a, b) => a - b) crescente
//candles.sort((a, b) => b - a) decrescente
