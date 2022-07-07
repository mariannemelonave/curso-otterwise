// Dado a lista de compras a seguir,faça um programa que imprime no console o valor total. 
// Atenção, o valor de cada item é unitário

let array = [
    { nome: 'maçã', quantidade: 2, valor: 0.5}, 
    { nome: 'alface', quantidade: 1, valor: 1.73}, 
    { nome: 'Água 5L', quantidade: 2, valor: 5.99}, 
    { nome: 'Pão Francês', quantidade: 8, valor: 0.63}
    ]

const valorTotal = (produtos) => {
    let valorCompra = 0
    for (let i = 0; i < produtos.length; i++){
        //console.log(valorCompra)
        valorCompra += produtos[i].valor*produtos[i].quantidade
        
    }
    console.log("O valor total das compras é: R$" + valorCompra)
    
}
valorTotal(array)



    