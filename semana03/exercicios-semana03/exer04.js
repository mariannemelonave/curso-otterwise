// Crie um algoritmo que tem como entrada um número e imprime a sua tabuada do 1 ao 10.


let multi = 3
let numberOne = 0
let numberTwo = 0
let result = 0

const tabuada = (valueOne) => {
    for (let i=0; i>=10; i++){
        result = multi*i
        console.log(`${multi} x ${valueOne} = ${result}` )
    }
}

tabuada(5)