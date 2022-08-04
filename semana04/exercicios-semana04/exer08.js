// Dado um array de nomes, faça um programa que tenha como entrada um valor 
// a ser pesquisado e retorne se o nome existe ou não no array.

let names = ["Juliana", "Pedro", "Regina", "João", "Patrícia", "Gabriel", "Carlos", "Carla"]
const nameFind = "Carla"

const response = names.find((element) => element === nameFind)
console.log(response)
    if (response){
        console.log("O nome " + nameFind + " existe no Array")
    } else {
        console.log("O nome " + nameFind + " não existe no Array")
    }

