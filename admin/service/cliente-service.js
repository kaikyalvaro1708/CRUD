// conexão com a api
const listaClientes = () =>{
    // fetch já faz um get e devolve uma promise
    return fetch(`http://localhost:3000/profile`)
    .then( resposta => {
        return resposta.json()
    })
}

// registrar um novo cliente
const criaCliente = ( nome, email) =>{
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST', //enviar 
        //passar qual o tipo de informação que ta enviando
        headers:{
            'Content-Type': 'application/json'
        },
        // dados do formulário
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then (resposta=>{
        return resposta.body
    })
}

const removeCliente = (id)=>{
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
})
}
//exportar as funções
export const clienteService = {
        listaClientes,
        criaCliente,
        removeCliente
}






// ======================= ANOTACOES

// const http = new XMLHttpRequest ();
//         // Abrindo a comunição com a api
//         // o primeiro argumento diz sobre o que vou pedir
//         // o segundo argumento diz o endereço
//         http.open('GET', 'http://localhost:3000/profile')
    