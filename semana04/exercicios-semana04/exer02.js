// Dado um array de números, faça um programa que teste se este array contém um valor especíﬁco. 
// Tanto o valor quanto o array serão valores de entrada

let numbers = [0, 1, 3, -12, 33, -1, 9, 110, -1168, 252, -15253, 2127]
let value = 0

const response = numbers.find((element) => element === value)
    if (response || response === 0){
        console.log("O valor foi encontrado no Array")
    } else {
        console.log("O valor não foi encontrado no Array")
    }
