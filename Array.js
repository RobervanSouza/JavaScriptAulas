let jantar = 80
let garsom = 10 * (jantar / 100)
let total = jantar + garsom

// console.log(` Jantar: R$${jantar},00`)
// console.log(` Garson: R$${garsom},00`)
// console.log(` Total: R$${total},00`)


let valor = 60
let desconto = 10 * ( valor / 100)
let avista = valor - desconto;
let parcela = (valor / 3 ) 
//  console.log(` Valor: R$${valor},00`)
//  console.log(` Avista: R$${avista},00`)
//  console.log(` Parcelado 3x R$${parcela},00`)

// 3 #################################################################################
// 1 SOMA 
function soma (a, b) {
    return a + b;
}
//console.log(soma(7,90))

// 3 #################################################################################
// soma array = [1,2,3], 1+2+3=6 rettona 6
function somaArray(array){
    let soma = 0; // começa em 0
    for (let index = 0; index < array.length; index +=1){
       soma = soma + array[index]// soma pega o valor e o indice do array

   }
   return soma;
  
}
//console.log(somaArray([1,2,3, 10]))
/*
 for (let index = 0;/* >>começa em 0 */ //index < array.length;/*para percorer todo o array  */ index += 1 /*Soma de um em um *///   ) //{ // for e um laço de repetição, cada um iteem separado por dois pontos e uma condição//3 termina quando index e menor que o array que e 2 sempre começa em zero
 
 //3 #########################################################################################

// quem e maior a ou b
function maior(a,b){
let alice = 0;
let bia = 0;
for (let index=0; index < b.length; index += 1){
    if(a[index] > b[index]){// o a[index] e a posição do array, verifica cada posição
        alice += 1;
    }else if(a[index] < b[index]){
        bia += 1;
    }
}
return[alice, bia]
}
//console.log(maior([2,3 ,12 ], [4,6,8]))

//3 ########################################################################

// Soma a os itens de um array
function somaArray(array) {
    let soma = 0;
    for (let i=0; i < array.length; i+= 1){
        soma += array[i]
 
 } return soma;
}
console.log(somaArray([3,4,5,6,]))
//3 #######################################################################

// calcular valores de uma matriz a forma e 0,0 e 1,1 e 2,2 soma a diagonal e um menos o outro
function matriz(array){
let esquerda = 0;
let direita = 0;
    for (let i=0; i < array.length; i+= 1){
        esquerda += array[i] [i] // o primero [i] eo primeiro array e o segundo e o index pega 1 5 9
        direita += array[i] [array.length - 1 - i] // 
    }
    return Math.abs([esquerda - direita]);// o math e arredondamento, o abs e numero absoluto, estão de 3-7=-4 o abs deixa 4
}
/*
console.log(matriz([
  /*0 */ [1,2,9],
  /*1 */ [4,5,6],
  /*2 */ [7,8,9]
//]))

// direita += array[i] pega o primeiro array [1,2,9]o sendo [array.length - 1 - index ]  pega o index  9 do array[1,2,9]como então fica assim  [array.length - 1 - index ]  array.length pega o tamanho do array, -1 diminui - do array que e 9, deppois o - 1 - index e diminui o index de cada vez

//3##################################################################################################################
// escada 
/*
   $$#
   $##
   ### 
*/
function escada(m){
    let espaco = '';
    let simbolo = '#';
    let linha = m - 1;
    for (let linhaIndex = 0; linhaIndex < m; linhaIndex += 1) { // esse for exeecuta as linhas uma linha de cada vez ai passa para o for de baixo 
        for (let colunaIndex = 0; colunaIndex < m; colunaIndex += 1) { // aqui ele anda cada coluna de cada vez que e executado
            if (colunaIndex < linhaIndex) {
                espaco += ' ';
            } else {
                espaco += simbolo;
            }
        }
      //  console.log(espaco);
        espaco = '';
        linha -= 1;
    }
}
//escada(8)
