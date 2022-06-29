
const proposta = (proventosPf, proventosPj) => {
    proventosPf += (proventosPf + 0.08 ) + 700

    if(proventosPj > proventosPf){
        console.log("A melhor proposta é PJ")
    } else {
        console.log("A melhor proposta é CLT")
    }
}

proposta(3000, 4500)