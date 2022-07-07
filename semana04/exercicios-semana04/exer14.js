// Uma empresa gostaria de organizar seu quadrode funcionários, para isso contratou o 
//estagiário Juquinha para criar um software. O CEO da empresa fez uma lista de pedidos para o Juquinha.

const employees = [ 
{ id: 1, name: 'Carlos', age: 35, active: false, birthdate: '13051986', contractdate: '20072015', job: 'front-end', type: 'clt' }, 
{ id: 2, name: 'Matheus', age: 30, active: true, birthdate: '03071991', contractdate: '01032020', job: 'front-end', type: 'clt'}, 
{ id: 3, name: 'Pamela', age: 23, active: true, birthdate: '20091998', contractdate: '19062021', job: 'back-end', type: 'pj'}, 
{ id: 4, name: 'Fabiana', age: 32, active: false, birthdate: '08121989', contractdate: '13042018', job: 'front-end', type: 'pj'}, 
{ id: 5, name: 'João', age: 37, active: true, birthdate: '08121984', contractdate: '03082014', job: 'front-end', type: 'clt'}, 
{ id: 6, name: 'Miguel', age: 29, active: true, birthdate: '08121992', contractdate: '26022015', job: 'fullstack', type: 'clt'}, 
{ id: 7, name: 'Francine', age: 27, active: false, birthdate: '27011994', contractdate: '23052019', job: 'designer', type: 'pj'}, 
{ id: 8, name: 'Matheus', age: 31, active: true, birthdate: '10111990', contractdate: '18092017', job: 'marketing', type: 'clt'}, 
{ id: 9, name: 'Gabriel', age: 28, active: true, birthdate: '08121993', contractdate: '14112020', job: 'ﬁnanceiro', type: 'clt'} 
]

//  Função para retornar apenas o funcionário com o id informado
// let idInformed = 2
// console.log(employees.find((elem) => elem.id === idInformed));


// Função para ﬁltrar apenas os funcionários ativos na empresa
// const actives = employees
// .filter((element) => element.active)
// .forEach((elem) => console.log(elem.name));
// console.log(actives);

// Função para ﬁltrar apenas funcionários clt
// const clt = employees
// .filter((user) => (user.type == "clt"))
// .forEach((user) => console.log(user.name));

//  Função para criar uma nova estrutura onde cada funcionário receberá uma nova informação de base salarial 


// Função onde separa em 2 grupos os funcionários pj e clt
// const clts = employees
// .filter((user) => (user.type == "clt"))
// .forEach((user) => console.log(user.name))


// console.log("......................")

// const pj = employees
// .filter((user) => (user.type == "pj"))
// .forEach((user) => console.log(user.name));


//Função que retorna apenas funcionários ativos ordenados por ordem de idade

// const actives = employees
//   .filter((element) => element.active)
//   .sort((firstElem, secondElem) => firstElem.age - secondElem.age)
//   .slice(0, employees.length)
//   console.log(actives)

