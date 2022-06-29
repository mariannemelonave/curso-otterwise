// let arrayValues = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

//repetição de 0 até 14
// for(let i = 0; i <=14; i++){
//     console.log(arrayValues[i])
// }

// repetição pelo tamanho do array
// for(let i = 0; i < arrayValues.length; i++){
//      console.log(arrayValues[i])
// }

// de trás pra frente
// for(let i = arrayValues.length - 1; i >=0; i--){
//      console.log(arrayValues[i])
// }

// Crie um algoritmo que imprime todos os valores de um array qualquer, menos oultimo elemento

let arrayValues = [1,2,3,4,5,6,7,8,9,10]

for(let i=0; i<arrayValues.length - 1; i++){
    console.log(arrayValues[i])
}