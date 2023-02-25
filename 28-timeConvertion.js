function timeConversion(s) {
  s.split(''); // split fa com cada elemento  de s vire um arrayEX: ['0', '1', '2', ]

  let hours = parseInt(s[0] + s[1]); // posição dos array  0 e 6
  let minutes = s[3] + s[4]; // e 4 e 0
  let seconds = s[6] + s[7];// o 0 e 3
  let ampm = s[s.length - 2]; // tiras os dois ultimos numeros

  if(hours >= 12 && ampm === 'A'){ // se horas e 24 então tem que fivcar 12h
    hours = hours - 12; // diminuir 12
  } else if(hours < 12 && ampm === 'P'){ // aschecernta 12 para ser 24 horas
    hours = hours + 12;
  }

  if(hours < 10){
    return (`0${hours}:${minutes}:${seconds}`); // retornar a hora em zero 
  } else {
    return (`${hours}:${minutes}:${seconds}`); // retyorna em numeros maior que 10
  }
}

console.log(timeConversion('06:40:03AM'));
console.log(timeConversion('07:05:45PM'));
//19:05:45