function filledOrders(order, k) {
  // Write your code here
  // com 40 reais quantos pratos voce consegue comprar
  let sum = 0;// e um contador, vai acrescentando numeros. vai depender da função que voce colocar 
  order.sort((a, b) => a - b); // primeiro ordena os elementos
  for(let index = 0; index < order.length; index += 1) {// passa por todo o array
    if(order[index] <= k) {// se os numeros e menor que 40, então soma
      sum += 1;// soma os index do array
      k -= order[index];// como o valor era 40, então toda vez que o array e menor que 40, soma um no sum e diminui 1 no k 
    }
  }
  return sum;
} 

console.log(filledOrders([10, 30, 1, 3, 4, 5, 6], 40));