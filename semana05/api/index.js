// GET --> Pega
// POST --> Envia
// PUT --> Editar
// PATCH --> Editar
// DELETE --> Deletar

// FAKE API --> https://jsonplaceholder.typicode.com/

import axios from "axios";

const getPosts = async() => {
    try {
        const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1")
    
        console.log(response.status)
        return response.data

    } catch(error) { 
    console.log(error.message)
    console.log("Deu erro!!")
    }
}

console.log(await getPosts())

