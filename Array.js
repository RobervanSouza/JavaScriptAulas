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
       soma = soma + array[index]

   }
   return soma;
  
}
console.log(somaArray([1,2,3, 10]))
/*
 for (let index = 0;/* >>começa em 0 */ //index < array.length;/*para percorer todo o array  */ index += 1 /*Soma de um em um *///   ) //{ // for e um laço de repetição, cada um iteem separado por dois pontos e uma condição//3 termina quando index e menor que o array que e 2 sempre começa em zero
 












// 3 soma o array 
function array(teste){
    let soma = 0;
    for( let index = 0; index < teste.length; index +=3 ){
soma = soma + teste[index];
    }
    return soma;
}

//console.log(array([1,2,2,2,2,]));
