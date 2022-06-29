// 8- Dado um array de números como entrada, faça um programa que multiplique todos os valores por 10.

let array = [2, 9 , 4, 37, 88, 17, 21, 764, 92, 44]
let result = " "

for(i=0; i<array.length; i++){
    result += array[i] * 10 + ", "
}

console.log(result)