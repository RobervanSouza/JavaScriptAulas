function bigSorting(unsorted) {
  // Write your code here
  //  return unsorted.sort((a, b) => a - b);//1 dessa forma da certo em numeros pequenos
  // return unsorted.sort((a, b) => (BigInt(a) > BigInt(b) ? 0 : -1));//1 o interrrogação faz a pergunta se a e maior que b
  unsorted.sort((a, b) => { // o sorte fa uma ordenação de ordenação crescente ou decrescente
    if(a.length === b.length) {// se o tamanho do elemento A  e do tamanho de B 
      return a > b ? 1 : -1; // se A for maior que B  então, se sim 1 se não -1
    }
    return a.length - b.length;// se não for do mesmo tamanho, retorna A -B
  })
  return unsorted;
}

console.log(bigSorting(['1', '200', '150', '3']));
//['1', '3', '150', '200']