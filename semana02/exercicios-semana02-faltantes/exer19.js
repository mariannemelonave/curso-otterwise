// 19 -Crie um algoritmo que tem como entrada um arrayde strings e trata 
// essas string substituindo os números por letra de acordo com a tabela a seguir, 
//além disso, deve remover os espaços em branco no começo e ﬁm da string, se existirem.
// Tabela: 
// 1 : i 
// 3 : e 
// 4 : a 
// 5 : s 
// 0 : o  
let frases = ['  h3ll0 w0rld', '  w3b d3v3l0p3r  ', '0tterw1s3', 'j4v4scr1pt ']

let novasFrases = ""
for (let i=0; i<frases.length; i++){
    let letras = " "
    const frase = frases[i]

    for(let j=0; j<frase.length; j++){
        const letra = frase[j]
        if(letra == "  "){
            console.log(">")
        } else if (letra == "1"){
            letras += "i"
        } else if (letra == "3"){
            letras += "e"
        } else if (letra == "4") {
            letras += "a"
        } else if (letra == "0"){
            letras += "o"
        } else {
            letras += letra
        }

    }
    if (i < frases.length -1){
        novasFrases += letras + ", "
    } else {
        novasFrases += letras + "."
    }
    frases[i] = letras
}

console.log(frases)

