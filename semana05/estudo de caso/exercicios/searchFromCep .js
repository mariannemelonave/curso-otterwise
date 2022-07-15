const listCheck = async ceps => {
    const response = await Promise.all(
        ceps.map(e => {
            const result = getCEP(e)
            return result
        })
    )
    const filtrado = response.filter(e => !e.erro).map(e => {
        const { logradouro, bairro, localidade, uf, cep } = e
        return { logradouro, bairro, localidade, uf, cep }
    })
    console.log(filtrado)
    return filtrado
}

export default searchFromCep
