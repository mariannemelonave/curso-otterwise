// 18 - Escreva um programa que receba como entrada três números que serão armazenados 
// nas variáveis valueOne, valueTwo e valueThree respectivamente. 
// Tendo esses valores, mostre-os na tela na ordem em que estão armazenados. 
// Após ter mostrado faça trocas em que ao ﬁnal: 
// valueTwo assuma o valor de valueThree, 
// valueThree assuma o valor de valueOne 
// e valueOne assuma o valor de valueTwo. Mostre ao ﬁnal os valores atualizados.



  let valueOne = 2
  let valueTwo = 3
  let valueThree = 4

 console.log(valueOne)
 console.log(valueTwo)
 console.log(valueThree)

 auxiliar = valueTwo
 valueTwo = valueThree
 valueThree = valueOne
 valueOne = auxiliar

 console.log(valueOne)
 console.log(valueTwo)
 console.log(valueThree)



 

