function breakingRecords(scores) {
  // Write your code here
  let max = scores[0];// primeiro valor
  let min = scores[0];// segundo valor
  let countMax = 0; // recordes positivos
  let countMin = 0;// recordes negativos

  for(let index = 0; index < scores.length; index += 1){// 
    if(scores[index] > max){ //o index começa em zero[10], então se pra ter recorde tem que ser maior que 10 
      max = scores[index]; // sem  max for maior que 10 adiciona 1 no contador se tiver 3  numeros maior que 10 emtão motra que teve 3 recordes
      countMax += 1;
    };

    if(scores[index] < min){ // aqui e o minimo
      min = scores[index];
      countMin += 1;
    };
  }

return [countMax, countMin];// retorna dentro de um array

}

breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]);
