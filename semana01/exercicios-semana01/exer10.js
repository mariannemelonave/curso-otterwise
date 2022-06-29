// 10 - Tendo como informação dois números, faça um programa que imprima na tela qual deles é o MAIOR 
// e qual deles é o menor. Caso os números sejam iguais, informe que eles são iguais.


let numberOne = 10
let numberTwo = 10

if (numberOne > numberTwo){
    console.log(numberOne + " é maior que " + numberTwo)
} else if(numberTwo > numberOne){
    console.log(numberOne + " é menor que " + numberTwo)
} else if (numberOne == numberTwo){
    console.log(numberOne + " é igual a " + numberTwo)
}

