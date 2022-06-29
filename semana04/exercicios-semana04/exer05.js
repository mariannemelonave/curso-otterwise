// Escreva um programa para substituir os elementos pares pelo valor “X”.

const numbers = [1, -7, -23, 22, -19, 13, 10, -8, 52, -153, -127]

const result = numbers.map((element) => { 
    element%2 == 0 ? element = "X" : element 
    return element
})

console.log(result)