//  Dado um array de entrada com o nome e as notas de avaliações dos alunos, 
// retorne uma lista com os alunos que tiraram 0 em todas as provas.

const alunos = [
    {nome: 'Júlia', notas: [10, 6, 0]},
    {nome: 'Amélia', notas: [7, 5, 9]},
    {nome: 'Maggie', notas: [8, 0, 6]},
    {nome: 'Alex', notas: [0, 0, 0]},
    {nome: 'Carol', notas: [0, 0, 0]}, 
]

const notaZero = alunos.filter((element) => element.notas.every((notas) => notas == 0))
console.log(notaZero)




