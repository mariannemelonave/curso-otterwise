// dfrws  faça um programa que recebe um array e um função como parâmetro e percorre todo
// o array aplicando a função em cada um dos elementos do array

let numbers = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3]

const multiDez = (number) => number*10
const divCinco = (number) => number/5

function nemNumbers(array, operation) {
    for(let i=0; i<array.length; i++){
        array[i] = operation(array[i])
    }
    console.log(array)
}


nemNumbers(numbers, divCinco)