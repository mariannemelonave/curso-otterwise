// Escreva um programa para encontrar os elementos comuns entre dois arrays

const arrayOne = [1, -7, -23, 22, -19, 13, 10, -8, 52, -153, -127]
const arrayTwo = [-5, -19, 32, 28, 65, -2, -49, -63, 22, 13, 255 ]

const newArray = arrayOne.filter((elementarrayOne) => arrayTwo.some((elementarrayTwo) => elementarrayOne === elementarrayTwo))

console.log(newArray)
