// 17 -Dado o array de objetos a seguir, crie um algoritmo que imprimirá no console 
// se o user é dev ou não, conforme a saída esperada à seguir. 
// Importante: DEVE ser na mesma linha.

let users = [
    { name: 'Marília', age: 26, job: 'Dev' },
    { name: 'Juca', age: 21, job: 'RH' },
    { name: 'Flávia', age: 30, job: 'Financeiro' }, 
    { name: 'Sérgio', age: 24, job: 'Dev' },
    ]

let userInformations = ""
let sumUsers = ""

for(let i=0; i<users.length; i++){
    if(users[i].job == "Dev"){
        userInformations = users[i].name + " é Dev."
    } else {
        userInformations = users[i].name + " não é Dev."
    }
sumUsers += userInformations + " "
}

console.log(sumUsers)
