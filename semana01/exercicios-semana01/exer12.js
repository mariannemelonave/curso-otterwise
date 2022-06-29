// 12 - Um banco vai liberar linhas de crédito só para servidores públicos.
// Caso o(a) servidor(a) for professor(a) terá uma linha de crédito especial com uma taxa de juros menor. 
// Crie um algoritmo que possui três valores de entradas: 
// nome completo (string), servidor (boolean), professor (boolean) 
// e que imprime uma mensagem dizendo se a pessoa tem acesso a linha de crédito, se sim, qual linha de crédito.


let name = "Júlia"
let servidor = false
let professor = false


if(professor == false && servidor == false){
    console.log(name + "  infelizmente você não tem uma linha de crédito disponível.")
} else if ( professor && servidor){
    console.log("Parabéns, " + name + "!" + " Você tem acesso a nossa linha de crédito especial!")
} else if (professor == false && servidor){
    console.log(name + " você tem a linha de crédito para servidores")
}


