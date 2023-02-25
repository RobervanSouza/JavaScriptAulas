function plusMinus(arr) {
  let positive = 0; // quantidade de numaros positivos
  let negative = 0; // quantidade de numaros negativos
  let zero = 0; // quantidade de 0
  for(let index = 0; index < arr.length; index += 1){ /// ler o array
    if(arr[index] > 0){
      positive += 1;
    } else if(arr[index] < 0){
      negative += 1;
    } else {
      zero += 1;
    }
  }
  console.log((positive / arr.length).toFixed(6)); // tem que dividir pela quantidade de numeros
  console.log((negative / arr.length).toFixed(6));
  console.log((zero / arr.length).toFixed(6));
};

plusMinus([1, 1, 0, -1, -1]);

// m