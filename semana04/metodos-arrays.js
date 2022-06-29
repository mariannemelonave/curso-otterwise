// Métodos de Array que iremos utilizar:
// join;
// concat;
// push; 
// pop;
// shift;
// unshift;
// slice; 
// splice;
// reverse.

// join
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.join(" - "));

// concat
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruitsTwo = ["Kiwi", "Lemon", "Melon"];
// let result = fruits.concat(fruitsTwo);
// console.log(result);

//push
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// let result = fruits.push("Kiwi"); //Insere um elemento ao final do array
// console.log(result); //Mostra a quantidade de elementos em push

//pop
// fruits.pop(); //Retira o último elemento do array
// console.log(fruits.pop());

// shift //retira no inicio do array
// console.log(fruits.shift());
// console.log(fruits);

// unshift; // insere um elemento
// console.log(fruits.unshift("Pera"));
// console.log(fruits);

// slice;
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
// let result = fruits.slice(1, 4);
// console.log(result);

// splice;
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

//reverse.
console.log(fruits.reverse());
