// Pegue um valor de entrada e calcule o menor número de notas possíveis (cédulas) 
// no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. 
// A seguir mostre o valor lido e a relação de notas necessárias

const calculaNotas = (value) =>{

let notaCem = parseInt(value/100)
let restoDivCem = value%100
let notaCinquenta = parseInt(restoDivCem/50)
let restoDivCinquenta = parseInt(restoDivCem%50)
let notaVinte = parseInt(restoDivCinquenta/20)
let restoDivVinte = parseInt(restoDivCinquenta%20)
let notaDez = parseInt(restoDivVinte/10)
let restoDivDez = parseInt(restoDivVinte%10)
let notaCinco = parseInt(restoDivDez/5)
let restoDivCinco = parseInt(restoDivDez%5)
let notaDois = parseInt(restoDivCinco/2)
let restoDivDois = parseInt(restoDivCinco%2)
let notaUm = parseInt(restoDivDois/1)
let restoDivUm = parseInt(restoDivDois%50)

console.log(`${notaCem} notas de 100`)
console.log(`${notaCinquenta} notas de 50`)
console.log(`${notaVinte} notas de 20`)
console.log(`${notaDez} notas de 10`)
console.log(`${notaCinco} notas de 5`)
console.log(`${notaDois} notas de 2`)
console.log(`${notaUm} notas de 1`)

}

calculaNotas(761)