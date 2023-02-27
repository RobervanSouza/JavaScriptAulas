function extraLongFactorials(n) {
  // Write your code here
  n = BigInt(n);
  let num = BigInt(1);
  for(let index = n; index > 1; index --){// vai de 25 ate 1. Vai diminuindo ate chegar a um 
    num *= index; // tanto incrementa na soma como incrementa na multiplicação 
  }

  console.log(num.toString());// tem que converter em string 
};

extraLongFactorials(25);
// resulatado 15511210043330985984000000
// esta criando um fatorial