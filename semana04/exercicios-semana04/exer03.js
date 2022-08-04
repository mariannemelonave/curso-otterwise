
const numbers = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127]
const positives = numbers.filter((element) => element >= 0 )
const negatives = numbers.filter((element) => element < 0)
const pairs = numbers.filter((element) => element%2 == 0)
const odds = numbers.filter((element) => element%2 != 0)



console.log(positives + " A quantidade de numeros positivos é: " + positives.length)
console.log(negatives)
console.log(pairs)
console.log(odds)

console.log(typeof(positives))