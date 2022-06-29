// 3 -Dado um array de nomes, faça um programa que imprima na tela todos os nomes (na mesma linha).

let arrayNames = ['Angela', 'Rosa', 'Ticiana', 'Carla', 'João', 'Eduardo', 'Renata']
let result = " "

for(i=0; i < arrayNames.length; i++){
    
    if(i<arrayNames.length - 1){
        result += arrayNames[i] + ", " 
    }else if(i==arrayNames.length - 1){
        result += arrayNames[arrayNames.length - 1] + "."
    }
}

console.log(result)






