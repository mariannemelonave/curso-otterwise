// 14 - Faça um programa que receba de entrada três valores e mostre no console a soma dos dois maiores

let numberOne = 9
let numberTwo = 12
let numberThree = 10

if (numberOne > numberThree && numberTwo > numberThree){
    console.log(numberOne + numberTwo)

} else if (numberOne > numberTwo && numberThree > numberTwo){
    console.log(numberOne + numberThree)

} else if (numberTwo > numberOne && numberThree > numberOne){
    console.log(numberTwo + numberThree)

}
