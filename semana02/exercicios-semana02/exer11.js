// 11 -Dado um array de nomes, faça um programa quetenha como entrada um valor a ser 
// pesquisado e retorne se o nome existe ou não no array.

let arrayNames = ["Juliana", "Pedro", "Regina", "João", "Patrícia", "Gabriel", "Carlos", "Carla"]
let name = "Regina"
let flag = false

for(i=0; i<arrayNames.length; i++){ // problema na contagem
    if(name==arrayNames[i]){
        flag = true
    }  
    }
if(flag == true){
    console.log("O nome " + name + " existe no array")
} else {
    console.log("O nome " + name + " não existe no array")
}


