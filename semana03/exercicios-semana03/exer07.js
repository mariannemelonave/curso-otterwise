// Crie um algoritmo que tem como entrada um array de notas, e imprime no console a média aritmética dessas notas. 
// OBS: Para melhorar a resolução desse problema, monte um programa que retorna a média aritmética independente 
// do tamanho do array.

let array = [6, 8, 7]
let sum = 0
let media = 0

const notes = (media) => {
    for(i=0; i<array.length; i++){
        sum += array[i]   
    }
    media = sum/array.length
    console.log(media)
}

notes(array)