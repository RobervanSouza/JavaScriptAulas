function encryption(s) {
  let string = s.split(''); // transforma em um array. e elimina os espaços
  let column = Math.ceil(Math.sqrt(string.length));// sqrt e raiz quadrada. string.length conta os caracteres.  sqrt(string.length) esta dentro da rais e  mosta o valor 
  // O MATH.CEIL ARREDONDA PARA CIMA E O MATH.FLOEER E PARA BAIXO
  let result = [];

  for(let index = 0; index < column; index += 1){ // passa por cada coluna que e 4
    let char = index; // tamanho e 4
    let str = ''; // coloca os elemento no char
    while(char < string.length){ // while e = enquanto => enquanto index for menor que string então adiciona um elemento
      str += string[char]; // inclementa um caractere naqui adiciona o H
      char += column;// coloca na coluna então colocaou que deve ter 4 elementos. ENTÃO O WHILE VAI PERGUNTARSE4 E MENOR QUE A STRING, SE FOR ADIDIONA OS ELEMENTOS >>> HAVENA PRIMEIRA COLUNA
    }
    result.push(str);// quando der os quatros elementos então adiciona para e faz o push preenche a primeira linha vai para a segunda linha quando o index 1 faz isso ate o index ser 3 menor que quatro
  }

  return result.join(' '); // join juntas o elementos, SEM OS ('') JUNTA COM AS VIRGULAS
}

console.log(encryption('haveaniceday'));
