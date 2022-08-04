// 1. Crie uma função que gere uma lista de 20 CEP’s aleatórios. Dica: uma das faixas de CEP válidas vai
// de 29000000 a 29099999. Use essa informação para gerar os CEP’s dentro dessa faixa.

// gerar 20 ceps
// consultar um por um dos ceps na api do viacep
// criar um arquivo JSON com ceps válidos

// Math.floor (retorna menor número inteiro)
// Math.random (retorna número aleatório)

import axios from 'axios'
import fs from 'fs'

const geradorCEPs = (min, max) => {
  let ceps = []
  for (let index = 0; index < 20; index++) {
    ceps[index] = Math.floor(Math.random() * (max - min) + min)
  }
 // console.log(ceps)
  return ceps
}

const arrayCeps = geradorCEPs(94901000, 99999999)
console.log(arrayCeps)

const searchCep = async (array) => {
  const CEPs = await Promise.all(array.map(async element => {
      const response = await axios.get(
              `https://viacep.com.br/ws/${element}/json/`
    )
    // console.log(response.data)
      return response.data
  }))
  //console.log(CEPs)
} 

searchCep(arrayCeps)

  const main = async () => {
    const cepReturn = await searchCep(arrayCeps)
     saveToJSON(cepReturn, "cep.json")
  
}
main()


const saveToJSON = (infos, fileName) => {
  const parsedInfo = JSON.stringify(infos)
  fs.writeFileSync(fileName, parsedInfo)
}


// 2. Crie um programa que recebe uma lista de CEP’s e gera um arquivo JSON contendo as
// informações de logradouro, bairro, localidade, uf e o CEP consultado para cada um dos CEP’s válidos.
// Observação: escreva o arquivo apenas com ceps válidos e que tiveram retorno da api.

// .map e promiseAll

// const searchFromCep = async (cep) => {
//     for (let i = 0; i < cep.length; i++) {
//       try {
//         const { data } = await axios.get(
//           `https://viacep.com.br/ws/${cep[i]}/json/`
//         )
//         console.log(data)
//         //return data
//       } catch (error) {
//          console.log('Ocorreu um erro')
//       }
//     }
//   }

//   const listCEPs = async list => {
//     const response = await Promise.all(
//       list.map(e=> {
//         const result = searchFromCep(e)
//         //console.log(listCEPs)
//         return result
//       })
//     )
//     const filterLista = response.filter(e => !e.erro)
//     .map(e => {
//       const {logradouro, bairro, localidade, uf, cep } = e
//       return {logradouro, bairro, localidade, uf, cep }
//     })
//     //console.log(filterLista)
//     return filterLista
//   }

// const main = async () => {
//   const list = geradorCEPs()
//   const ceps = await listCEPs(list)
//   saveToJSON(ceps, ceps.json)
// }

// main()

// const saveToJSON = (infos, fileName) => {
//   const parsedInfo = JSON.stringify(infos)
//   fs.writeFileSync(fileName, parsedInfo)
// }