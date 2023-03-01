function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let applesCount = 0;
  let orangesCount = 0;

  apples.forEach((apple) => { // para cada elemento se caio em cima da casa entre s e t
    if((apple + a) >= s && (apple + a) <= t){ //  se a maça[2] mais a(posição da arvore  de maçã) for maior ou igual a s então caiu na casa && faz a verificação para ver se caiu em cima então fica >> se apple <=t então tem que varificar o espaço para ver se caiu dentro
      applesCount += 1; // pora somar 4+2, 4+3, e 4(-4) so um fica entre 7 e 10
    }
  });

  oranges.forEach((orange) => {
    if((orange + b) <= t && (orange + b) >= s){
      orangesCount += 1;
    }
  });

  console.log(applesCount);
  console.log(orangesCount);
};

countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);
//countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);
// s = 7 começo
// t = 10 e o final 
// a e a posição da arvore de maça = 4
// b = 12 que e a posição da arvore de laranjas
// maças [2, 3, -4],
// laranjas [3, -2, -4]
//
//
//
//