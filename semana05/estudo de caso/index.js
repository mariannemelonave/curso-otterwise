// Criar uma função para ler a entrada do usuário
// Criar uma função para buscar as informações do cep passado como parâmetro
// Criar função para salvar os dados em um arquivo JSON
// Fazer a integração entre as funções

import {input} from "console-input"
import axios from "axios"
import fs from "fs"

const cepInput = () => input("Digite um CEP: ")

const searchCEP = async(cep) => {
    try{
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        return response.data
} catch (error) {
    console.log(error.message)
}
}
searchCEP("96065340")

const saveToJSON = (data, fileName) => {
 const parsedJSON = JSON.stringify(data)
 fs.writeFileSync(fileName, parsedJSON)
}

const main = async () => {

    try{
     const cep = cepInput()
     const cepReturn = await searchCEP(cep)
     saveToJSON(cepReturn, "cep.json")
    } catch (error) {
        console.log(error.message)
    }
    
}

main()

    
