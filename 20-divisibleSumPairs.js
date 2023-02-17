// saber a quantidade de par que e dividido por (k)

function divisibleSumPairs(n, k, ar) {
  // Write your code here
  let sum = 0;
  for(let index = 0; index < n; index += 1){  // anda por todos os elementos
    for (let pair = 0; pair < n; pair += 1) { 
      if(index != pair){ // se EX: 1+1, tem que pular a posição dele mesmo
        if((ar[index] + ar[pair]) % k === 0){ // pega o valor do array index se 1+3 for dividivo por 2 e o resto der zero então e par
          sum += 1;
        }
      }
    }
  };
  return sum / 2;
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));
//o 6 quantidade de itens que tem no arrai === (n)
//  o 3 e o numero que vai dividir a soma do array  fica assim 1+3 / 3, e 1+2/3
//[ 1, 3, 2, 6, 1, 2 ] aqui e o AR

//for (let pair = 0; pair < n; pair += 1) { // pega os valores EX: 1+3, 1+2, 1+6 assim... depois pega o 3 EX: 3+1, 3+2, 3+6 assim ...