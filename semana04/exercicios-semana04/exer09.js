// Dado a lista de compra a seguir, faça um programa que imprime no console valor total. 
// Atenção, o valor de cada item é unitário.

const compras = [
    { nome: 'maçã', quantidade: 2, valor: 0.5},
    { nome: 'alface', quantidade: 1, valor: 1.73}, 
    { nome: 'Água 5L', quantidade: 2, valor: 5.99}, 
    { nome: 'Pão Francês', quantidade: 8, valor: 0.63}
    ]
    
const valorTotalCompras = compras.reduce((total, item) => total + (item.valor * item.quantidade), 0)

console.log(valorTotalCompras)