function ratos(ga, gb, ra) {
  let gatoA = ga;
  let gatoB = gb;
  let rato = ra
  if ((Math.abs(rato - gatoA)) < (Math.abs(rato - gatoB))) {
    return 'GatoA';

  } else if ((Math.abs(rato - gatoA)) === (Math.abs(rato - gatoB))) {
    return 'gatoB'
  } else {
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

  const numero = Object.keys(counts).find((key) => {
    return counts[ key ] === valorMaximo
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

//console.log(`Seu peso ideal e : ${pesoIdeal.toFixed(3)}Kg `)// tofixed e casas decimais 
//3 ######################################################################################
// diferença de horario entre um pais e outro, hora na frança e 5+ que no brasil
let brasilhoras = 22;
let minutos = 32;
let horaFranca = brasilhoras + 5;
if (horaFranca > 24) {
  horaFranca = horaFranca - 24;
}

horaFranca > 24 ? horaFranca = horaFranca - 24 : horaFranca;

//console.log(horaFranca)
//3 #####################################################################################

//salario, diminua todos os gastos e o total de gastos


let salario = 1000
let escola = 200
let curso = 300
let energia = 400
let totalgatos = escola + curso + energia;
let retoSalario = salario - totalgatos;
//console.log('Resto Salario',retoSalario)
//console.log('total de gastos',totalgatos)

// 2 outra forma
let salarios = 2002
let gastos = {
  'cursor': 200,
  'tv': 300,
  'internet': 300,
}
// console.log(Object.values(gastos)) retorna os objetos do array
const total = Object.values(gastos).reduce((a, b) => a + b) // reduz o array, a e b e para somas e deixa um numero so, soma de um em um
const resto = salarios - total
//console.log(resto)
//3 #################################################################################


let alturas = [];

function criaPessoas(numero) {
  for (let index = 0; index < numero; index += 1) {
    alturas.push(Math.random() * (2.5 - 1.3) + 1.3).toFixed(2)// o push cria pessoas sempre na primeira posição do array. o rendo cria numeros entre 0 e 1 aleatorio. o *2 gera um numero aleatorio entre zero e 10. (2.5 - 1.3) + 1.3) tem o valor maximo 2.5-1.3 e o valoe minimo que e +1.3.
  }
};
criaPessoas(20);

let menorAltura = (alturas.sort()[ 0 ]).toFixed(2) // o sort ordena a de forma crescente [ 1.2, 1.5, 1.6, 1.6, 1.8, 1.8 ]
let maiorAltura = (alturas.sort((a, b) => b - a)[ 0 ]).toFixed(2)
let soma = 0;
alturas.forEach((altura) => soma += altura); // soma todas as alturas

let media = (soma / alturas.length).toFixed(2) // pega a soma e dividi pela quantidade de itens que tem no array( o alturas.length e o tamanho do array , o length conta os itens)


let menorMedia = 0;
alturas.forEach((altura) => { //foreach passa por todos os itens do array e pergunta se e meno que a media se for ele acrescena um na menorMedia

  if (altura < media) menorMedia += 1;
})
console.log(`menor altura = ${menorAltura}`)
console.log(`Maior  alturas = ${ maiorAltura }`)
console.log(`Media de alturas = ${ media }`)
console.log(` quantidade de pessoa que tem altura menor que a media= ${menorMedia }`)
