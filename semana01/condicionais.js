//comandos condicionais

/*
let saldo = 50
let compras = 100

if (saldo >= compras){
    console.log("Compras realizadas com sucesso")
} else {
    console.log("Saldo insuficiente")
}
*/

/*
let number = -2

if (number > 0){
    console.log("Positivo")
} else if (number < 0) {
    console.log("Negativo")
} else {
    console.log("Zero")
}
*/

// Menu
// 1 - Pizza Muito pequena 
// 2 - Pizza pequena 
// 3 - Pizza Média 
// 4 - Pizza Grande 
// 5 - Pizza Muito Grande
//Opção inválida 



/*
if (opcao === 1){
    console.log("Pizza Muito pequena")
} else if (opcao === 2) {
    console.log("Pizza pequena")
} else if (opcao === 3) {
    console.log("Pizza Média")
}else if (opcao === 4) {
    console.log("Pizza Grande")
}else if (opcao === 5) {
    console.log("Pizza Muito Grande")
} else {
    console.log("Opção inválida")
}


let opcao = 6

switch(opcao){
    case 1:
        console.log("Pizza Muito pequena")
        break
    case 2:
        console.log("Pizza pequena")
        break
    case 3: 
        console.log("Pizza Média")
        break   
    case 4:
        console.log("Pizza Grande")
        break
    case 5: 
        console.log("Pizza Muito Grande")
        break
    default:
        console.log("Opção inválida")
        break
}
*/

// Operador lógico E (&&)
// Operador lógico OU (||)
// Operador lógico NÃO (!)

let x = 1
let y= 10


if(x > 0 && y > 0){
    console.log("Os dois valores são positivos")
} 

if (x > 0 || y > 0){
    console.log("Pelo menos um é verdadeiro")
} 

if (!(x > 0 && y > 0)){
    console.log("Não")
} 