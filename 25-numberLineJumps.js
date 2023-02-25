function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  let jump1 = x1; // começa aqui no 3
  let jump2 = x2;
  let yesNo = 'NO';
  for(let index = 0; index < 10000; index += 1){
    jump1 += v1; // pula 3
    jump2 += v2;// 
    if(jump1 === jump2){ // se encontaram = 4
      yesNo = 'YES';
    }
  }
  return yesNo;
};

console.log(kangaroo(0, 3, 4, 2));