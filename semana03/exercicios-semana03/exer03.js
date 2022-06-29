// Dado um array de nomes, faça um programa que imprima na tela todos os nomes (na mesma linha).

let arrayNames = ["Julie", "Tamara", "Renata", "Leticia", "Fernanda", "Carol"]

const names = (array) => {
   let namesLine
   
   for(let i=0; i<array.length; i++){
    if(array[array.length]){
        namesLine += array[i]
    } else {
        namesLine += array[i] + " , "
    }
   }

   console.log(namesLine)

}

names(arrayNames)

