// função para somar dois valores
// function soma(valueOne, valueTwo){
//     return valueOne + valueTwo
// }
//console.log(soma(10, 15))

// função anônima
// const sum = function (valueOne, valueTwo){
//     return valueOne + valueTwo
//}
//console.log(sum(10, 20))

//Arrow function

// const somar = (valueOne, valueTwo) => {
//     return valueOne + valueTwo
// }
//console.log(somar(10, 12))

//Arrow function com retorno implícito
const somar = (valueOne, valueTwo) => valueOne + valueTwo
console.log(somar(10,30))

const maiorIdade = (idade) => idade>=18

if(maiorIdade(27)){
    console.log("É maior de idade")
}else{
    console.log("Não é maior de idade")
}


//retornar uma função
function somaa(numberOne) {
    return function (numberTwo){
        return numberOne + numberTwo
    }
}
console.log(somaa(5)(3))