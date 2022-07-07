
const proposta = (proventosPf, proventosPj) => {
    proventosPf = (proventosPf + (proventosPf * 0.08) + 700)*12 + (proventosPf + proventosPf/3) + (proventosPf) 
    proventosPj = (proventosPj)*12

    if(proventosPj > proventosPf){
        console.log("A melhor proposta é PJ")
    } else {
        console.log("A melhor proposta é CLT")
    }
}

proposta(3000, 5500)