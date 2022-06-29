// 15 -Dado o array de objetos abaixo, faça um programa que calcule a média 
// aritmética dos estudantes e imprima no console os nomes dos estudantes aprovados. 
// A média de aprovação é 7.0. 
// Os valores de entrada serão: Array de Objetos;

let user = {
    turma: [
        {nome: 'Marcos', notas: [10, 7, 2]}, 
        {nome: 'Michele', notas: [10, 10, 10]}, 
        {nome: 'Pedro', notas: [3, 10, 9]}, 
        {nome: 'Andressa', notas: [6, 6, 8]}, 
        {nome: 'Cristiana', notas: [7, 9, 2]},
    ],
}

let somaNotas = []
let media = []

for(let i=0; i<user.turma.length; i++){
        somaNotas += user.turma[i].notas
        media = somaNotas / user.turma[i].length

    // console.log(user.turma[i].nome)
    // console.log(user.turma[i].notas)
    // console.log(user.turma[i].soma)
    console.log(media)
}


