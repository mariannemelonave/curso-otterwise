// 7- Escreva um programa que tenha como entrada umvalor. 
// Este valor é a quantidade de linhas de saída que serão apresentadas na execução do programa.

let array = 5
let contador = 1
let linha

for(let i=0; i<=array; i++){
    linha = contador + " " + (contador+1) + " " + (contador+2) + " PUM"
    console.log(linha)
    contador += 3

}



