// Crie um algoritmo que tem como entrada um array de strings e trata essas string substituindo
// os números por letra de acordo com a tabela a seguir, além disso, deve remover os espaços 
/// em branco no começo e ﬁm da string, se existirem


const array = ['  h3ll0 w0rld', '  w3b d3v3l0p3r  ', '0tterw1s3', 'j4v4scr1pt ']

const nemArray = array.map((element) => {
    
    return element.replaceAll(("3", "e").replaceAll("0", "o").replaceAll("1", "i").replaceAll("4", "a").replaceAll(" ", ""))
    
})

console.log(nemArray)



//revisar as repetiçoes



