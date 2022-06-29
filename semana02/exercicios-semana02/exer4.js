// 4 -Crie um algoritmo que tem como entrada um número e imprime a sua tabuada do 1 ao 10.

let number = 7
let result = " "

for (i=0; i<=10; i++){
    result+=number + " x " + i + " = " + number*i + "\n" 
}

console.log(result)