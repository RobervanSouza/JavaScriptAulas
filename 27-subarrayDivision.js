function birthday(s, d, m) {
  // Write your code here
  let count = 0;
  let sum = 0;
  for (let index = 0; index <= (s.length - m); index += 1) {//(s.length - m) tem que ser manos um nu7mero do final então so vai ate 3 
    for(let index2 = 0; index2 < m; index2 += 1){/// vai de zero ate menor que ,m=3
      sum = sum + s[index + index2];// pega EX: 2+2, 2+1 1+3, 3+2pega a posição e o segundo numero sempre a posição a cima segundo
    }
    if(sum === d){// se for igual a dia que e igual a 4
      count += 1;
    }
    sum = 0; // zero o valor quandop encontrar e inicia novamente
  }
  return count;
};

console.log(birthday([2, 2, 1, 3, 2], 4, 2)); //o 2+2  =4 enta soma 1, 2+1 =3 não conta, 1+3 =4 então soma, 3+2=5 não conta	

//dia = 4
// mes = 2
// 2