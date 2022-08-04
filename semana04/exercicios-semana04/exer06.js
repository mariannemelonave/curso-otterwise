// Dado um array de números como entrada,faça um programa que multiplique todos os valores por 10

const numbers = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3]

const multi = (numbers, value) =>{
    const result = numbers.map((element) => element*value)
console.log(result)
return result
}

console.log(multi(numbers, 10))
