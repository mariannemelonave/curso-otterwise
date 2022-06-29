const user = {
    name: "Marianne",
    idade: 28,
    cpf: 025,
    cnh: 599,
    historico_escolar: {historia: 7, geografia: 8, matematica: 10}
}

// console.log(user.name)
// console.log(user.idade)

// const {name, idade} = user
// console.log(name)
// console.log(idade + " anos")


// const {
//     historico_escolar: {historia}
// } = user
// console.log("nota: " + historia)

// desestruturação de array

// const names = ["Marianne", "Júlia", "Aline"]
// const [primeiroName, segundoName, terceiroName] = names
// console.log(primeiroName)
// console.log(terceiroName)


// direto no objeto como parâmetro
const getName = ({name}) => name
console.log(getName(user))