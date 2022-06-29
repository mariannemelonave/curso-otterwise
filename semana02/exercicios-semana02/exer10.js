// 10 -Crie um algoritmo que tem como entrada um array de notas, 
// e imprime no console a média aritmética dessas notas.

let array = [6, 8, 7]
let soma = 0
let media = 0
//let result = " "

for(i=0; i<array.length; i++){
    soma += array[i]
    media = soma / array.length 
}
    

    console.log(media)
    