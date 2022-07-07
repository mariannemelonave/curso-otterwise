//Métodos Específicos de Array
// forEach 
// map 
// filter 
// find 
// every 
// some 
// sort 
// reduce 

let names = [
  "Barros",
  "João",
  "Beatriz",
  "Mariane",
  "Matheus",
  "Miguel",
  "Felipe",
];

let value = names.forEach((element, index, arrayOriginal) => {
  console.log(`Indice: ${index} - Elemento: ${element}`);
  names[index] = "X";
});
console.log(names);
//console.log(value); //forEach sempre retorna undefined.
