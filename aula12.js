function ratos(ga, gb, ra) {
    let gatoA  = ga;
    let gatoB = gb;
    let rato = ra
    if((Math.abs(rato - gatoA)) < (Math.abs(rato - gatoB))){
      return 'GatoA';

    } else if((Math.abs(rato - gatoA)) === (Math.abs(rato - gatoB))){
      return 'gatoB'
    } else{
      return 'rato';
    }

}

//console.log(ratos([1,2,3,]))
//console.log(ratos([1,3,2,]))
//3 #################################################################################
// id que mais se repetem
function repetem(arr) {
  let counts = {};
  arr.forEach(element => { // o forEach faz  uma busca no array e cada vez que o numero se repete ele soma um e guarda no count 
    counts[ element ] = (counts[ element ] || 0) + 1; // tem esse retorno no couts { '1': 2, '2': 3, '3': 3, '4': 5, '5': 5 }
  });
const valorMaximo = Math.max(...Object.keys(counts))// o spred(...) pega o que tem dentro de counts e espalha para 
  //console.log(Object.values(counts))

  const numero = Object.keys(counts).find((key) =>{
   return counts[key] === valorMaximo
  })
return numero

}
// const numero = Object.keys(counts).find(key => {// como esta trazendo todas as chaves então busca uma em espacifico. o FIND procura uma so
//console.log(repetem([2,4,4,1,1,2,2,3,3,3,3,3,4,4,4,5,5,5,5,5,]))


//3 ##################################################################################
//par ou impar
/*
let numero = 11;
(numero % 2 === 0) ? console.log( ` o numero ${numero} e PAR` ) : console.log(` o Numero e Impar ${numero}`)
*/

//3 ######################################################################################

// peso ideal 
// altura  * 22 homens
// altura  * 21 mulheres
let altura = 1.80;
let sexo = 'masculino';
let pesoIdeal = 0;

if (sexo === 'masculino') {
  pesoIdeal = 22 * Math.pow(altura, 2)// pow e uma potencia
} else {
  pesoIdeal = 21 * Math.pow(altura, 2);
}

console.log(`Seu peso ideal e : ${pesoIdeal.toFixed(3)}Kg `)// tofixed e casas decimais 