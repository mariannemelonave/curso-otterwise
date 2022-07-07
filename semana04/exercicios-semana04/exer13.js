// Em uma empresa de tecnologia aárea de Recursos Humanos precisava organizar algumas informações 
// a respeito dos funcionários. Para que isso fosse possível, ele precisava criar um programa que 
// entregasse a lista de funcionalidades abaixo.

let users = [
    { nome: "João", idade: 30, salario: 15000, senioridade: "senior" }, 
    { nome: "Pedro", idade: 22, salario: 10000, senioridade: "pleno" }, 
    { nome: "Carla", idade: 27, salario: 1500, senioridade: "estagio" }, 
    { nome: "Lucas", idade: 35, salario: 15000, senioridade: "senior" }, 
    { nome: "Roberta", idade: 45, salario: 5000, senioridade: "junior" }, 
    { nome: "Patrícia", idade: 19, salario: 10000, senioridade: "pleno" }, 
    { nome: "Joana", idade: 23, salario: 5000, senioridade: "junior" },
    ]

// Ordena o Array em ordem crescente por idade;    
  const crescenteIdade = users
  .sort((firstElem, secondElem) => firstElem.idade - secondElem.idade)
  .slice(0, users.length);

  //console.log(crescenteIdade)

  // Ordena o Array em ordem decrescente por idade;
  const decrescenteIdade = users
  .sort((firstElem, secondElem) => secondElem.idade - firstElem.idade)
  .slice(0, users.length);

  //console.log(decrescenteIdade)

// Ordena o Array em ordem crescente por salário
const crescenteSalario = users
  .sort((firstElem, secondElem) => firstElem.salario - secondElem.salario)
  .slice(0, users.length);

  //console.log(crescenteSalario)

  // Ordena o Array em ordem decrescente por salário
  const decrescenteSalario = users
  .sort((firstElem, secondElem) => secondElem.salario - firstElem.salario)
  .slice(0, users.length);

  //console.log(decrescenteSalario)

  

  // Ordena o Array em ordem crescente por senioridade
  const crescenteSenioridade = users
  .sort((firstElem, secondElem) => firstElem.senioridade - secondElem.senioridade)
  .slice(0, users.length);

  console.log(crescenteSenioridade)

  // Ordena o Array em ordem decrescente por senioridade
  const decrescenteSenioridade = users
  .sort((firstElem, secondElem) => secondElem.senioridade - firstElem.senioridade)
  .slice(0, users.length);

  console.log(decrescenteSenioridade)

  // procurar sobre dicionario