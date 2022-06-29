// 6- Dado um array de números, mostre quantos valores são pares, 
// quantos são ímpares, quantos são positivos e quantos são negativos.
// Exemplo de Entrada: [-5,0,-3,-4,12]

let array = [-5,0,-3,-4,12]
let positivos = 0
let negativos = 0
let pares = 0
let impares = 0

for (i=0; i<array.length; i++){

    if(pares==array[i]%2==0) {
        pares+
        console.log("são " + pares + " números pares")
    } else if(impares==array[i%2 != 0]){
        impares+
        console.log("são " + impares + " números pares")
    } else if(negativos==array[i]<0){
        console.log("são " + negativos + " números pares")
    } else if (positivos==array>0){
        console.log("são " + positivos + " números pares")

    }
}

