// Dado um array de números, faça um programa que encontre o menor elemento 
// deste array e sua posição. Mostre as informações encontradas no console

let arrayNumber = [1,2,3,4,-5,6,7,8,9,10]
let menor = 0
let posicaoMin = 0
let result = 0

for(i=0; i<arrayNumber.length; i++){
    if (arrayNumber[i] < menor){
        menor = i
        console.log(menor)
    } else if (posicaoMin > arrayNumber[menor]){
        posicaoMin = arrayNumber[menor]
        console.log(posicaoMin)
    }
}





