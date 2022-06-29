// Dado um array de números, faça um programa que encontre o menor elemento deste array e sua posição. 
/// Mostre as informações encontradas no console. OBS: Para melhorar a resolução desse problema,
//  monte um programa que também consegue retornar qual o maior valor e qual a sua posição


let array = [1,2,3,4,-5,6,7,8,9,10]
let menor = 0
let posicaoMin = 0

const value = (menor) => {
     for(i=0; i < array.length; i++){         
        if (array[i] < menor){
            menor = i
            console.log(menor)
        } else if (posicaoMin > array[menor]){
            posicaoMin = array[menor]
            console.log(posicaoMin)
        }
}
}

value(array)

