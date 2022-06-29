// 15 - Elabore um programa que receba três valores como entrada e mostre eles em ordem crescente no console.

let valueOne = 2
let valueTwo = 5
let valeuThree = 13

if (valeuThree <  valueTwo && valeuThree < valueOne){
    if (valueOne < valueTwo){
        console.log(valeuThree + " " + valueOne + " " + valueTwo)
    } else {
        console.log(valeuThree + " " + valueTwo + " " + valueOne)
    }
} else if (valueTwo < valueOne && valueTwo < valueOne ){
    if(valueOne < valeuThree){
        console.log(valueTwo + " " + valueOne + " " + valeuThree)
    } else {
        console.log(valueTwo + " " + valeuThree + " " + valueOne)
    }
} else if (valueOne < valueTwo && valueOne < valeuThree){
    if(valueOne < valueTwo){
        console.log(valueOne + " " + valueTwo + " " + valeuThree)
    } else {
        console.log(valueOne + " " + valeuThree + " " + valueTwo)
    }
}
