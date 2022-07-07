// 20 -Dado o objeto abaixo, faça um programa que imprime no console o nome, 
// cpf e telefone formatados. Dica: Separe o código em funções de formatação para cada um dos campos

let user = {nome: 'Analu dos santos baptista', cpf: '14776213931', telefone: '8328008258'}

console.log(user.nome) 

let armazenaCpf = ""
let inserirCpf = ""
function formatacaoCpf (number){
    for(let i=0; i<number.length; i++){

        armazenaCpf = number[i]
        
        if(i == 2){
           inserirCpf += number[2] + "."
        } else if(i == 5) {
            inserirCpf += number[5] + "."
        } else if (i == number.length-3){
            inserirCpf += number[i] + "-"
        } else {
            inserirCpf += number[i]
        }
    }
console.log(inserirCpf)    
}

formatacaoCpf(user.cpf)

let armazenaTelefone = ""
let inserirTelefone = ""
function formatacaoTelefone (number){
    for(let i=0; i<number.length; i++){

        armazenaTelefone = number[i]
        
        if(i == 0){
            inserirTelefone += "(" + number[i]
        } else if(i == 1){
            inserirTelefone += number[i] + ")" 
        } else if(i == 5) {
            inserirTelefone += number[4] + "-"
        } else {
            inserirTelefone += number[i]
        }
    }
console.log(inserirTelefone)    
}

formatacaoTelefone(user.telefone)