// Dado um array de números, faça um programa que imprima na tela somente os números positivos.
// OBS: Para melhorar a resolução desse problema, crie funções que também imprimem os  
// números negativos, os pares, os ímpares e realize a contagem de cada um deles.

let arrayNumbers = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127]

const number = (array) => {
    
    let numberPositive = 0
    let numberNegative = 0
    let numberPair = 0
    let numberOdd = 0

    for(i=0; i < array.length; i++){
        array[i]>=0 ? numberPositive ++ : numberNegative ++
        array[i]%2 == 0 ? numberPair ++ : numberOdd ++
    }
    console.log("Positivos: " + numberPositive)
    console.log("Negativos: " + numberNegative)
    console.log("Pares: " + numberPair)
    console.log("Ímpares: " + numberOdd)
}

number(arrayNumbers)




