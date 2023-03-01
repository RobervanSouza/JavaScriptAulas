function bonAppetit(bill, k, b) {
  // Write your code here
  let sum = 0;
  let final = 0;

  bill.forEach(price => sum += price); // soma de todoa os elementos do ARRAY 
  sum = sum - bill[ k ]; // faz o valor total [72, 53, 60, 66, 90, 62, 12, 31, 36, 94] - o k=12
  final = sum / 2; // valor final de bil e ana, ana não consumiuo valor 12 o resto ela consumiu
  if(final != b){ // se o valor final for diferente do valor final b =288
    console.log(b - final); // o valor e diferente
  } else {
    console.log(`Bon Appetit`); // se for igual 
  }
}

bonAppetit([72, 53, 60, 66, 90, 62, 12, 31, 36, 94], 6, 288);// o item 6 ana não comeu
// 1valor [72, 53, 60, 66, 90, 62, 12, 31, 36, 94] do bill
// valor de de k e 6
// valor de b = 288
