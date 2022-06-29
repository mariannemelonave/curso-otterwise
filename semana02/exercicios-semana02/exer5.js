// 5 -Dado um array de números, faça um programa queimprima na tela somente os números positivos

let array = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127] 
let result = " "

for (let i=0; i<array.length; i++){
    if (array[i]>0){
        console.log(array[i])
    } 
}

