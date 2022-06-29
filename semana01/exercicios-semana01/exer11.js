// 11 - Tendo como informação os três lados de um triângulo 
// faça um programa que imprima na tela se ele é EQUILÁTERO, ISÓSCELES ou ESCALENO.
// OBS: 
// Triângulo Equilátero → Possui os 3 lados iguais; 
// Triângulo Isósceles → Possui 2 lados iguais; 
// Triângulo Escaleno → Possui 3 lados diferentes.

let ladoOne = 5
let ladoTwo = 4
let ladoThree = 4

if (ladoOne == ladoTwo && ladoOne == ladoThree){
    console.log("O triângulo é Equilátero")
} else if(ladoOne!=ladoTwo && ladoOne!=ladoThree && ladoTwo!=ladoThree){
    console.log("O triângulo é Escaleno")
} else if(ladoOne == ladoTwo || ladoTwo == ladoThree || ladoOne == ladoThree){
    console.log("O triângulo é isósceles")
}

