//  Em uma empresa de tecnologia a área de Recursos Humanos precisava organizar algumas informações 
// a respeito dos funcionários. Para que isso fosse possível, ele precisava criar um programa que 
// entregasse a lista de funcionalidades abaixo.

let funcionarios = [
    { nome: "João", idade: 30, salario: 15000, senioridade: "senior" }, 
    { nome: "Pedro", idade: 22, salario: 10000, senioridade: "pleno" }, 
    { nome: "Carla", idade: 27, salario: 1500, senioridade: "estagio" }, 
    { nome: "Lucas", idade: 35, salario: 15000, senioridade: "senior" }, 
    { nome: "Roberta", idade: 45, salario: 5000, senioridade: "junior" }, 
    { nome: "Patrícia", idade: 19, salario: 10000, senioridade: "pleno" }, 
    { nome: "Joana", idade: 23, salario: 5000, senioridade: "junior" },
    ]

    const ordemArray = (funcionarios, operacao, ordem) => {
       
        for (let i=0; i<funcionarios.length; i++){
        let aux
            for (let j = 0; j<funcionarios.length; j++){
                if(ordem == 'crescente'){
                    if(funcionarios[i][operacao] <= funcionarios[j][operacao]){
                        aux = funcionarios[i]
                        funcionarios[i] = funcionarios[j]
                        funcionarios[j] = aux
                    }}
                else if(ordem == 'decrescente'){
                    if(funcionarios[i][operacao] >= funcionarios[j][operacao]){
                        aux = funcionarios[i]
                        funcionarios[i] = funcionarios[j]
                        funcionarios[j] = aux
                    }}
        }}

    return console.log(funcionarios)
    }
ordemArray(funcionarios, 'idade', 'crescente')
ordemArray(funcionarios, 'idade', 'decrescente')
ordemArray(funcionarios, 'salario', 'crescente')
ordemArray(funcionarios, 'salario', 'decrescente')

// pesquisar sobre dicionario em JS

        