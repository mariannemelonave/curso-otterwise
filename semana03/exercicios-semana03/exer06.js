// Dado um array de números como entrada,faça um programa que multiplique todos os valores por 10. 
// OBS: Para melhorar a resolução desse problema, monte um programa que recebe como parâmetro o 
// valor pelo qual os valores do array devem ser multiplicados.


let array = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3]

let value = 20  

const numbers = (multi, value) => {
let result = " " 
  
    for(i=0; i < array.length; i++){
        multi = array[i]*value
        result += multi + ", "
    }
    console.log(result)
}

numbers(array, value)

