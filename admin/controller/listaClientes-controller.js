import { clienteService } from "../service/cliente-service";

const criarNovaLinha = (nome, email, id) => {
    const linhaNovoCliente = document.createElement('tr')
    const conteudo = 
    `
    <td class="td" data-td>${nome}</td>
        <td>${email}</td>
        <td>
            <ul class="tabela__botoes-controle">
                <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
            </ul>
    </td> 
    `
    linhaNovoCliente.innerHTML = conteudo
    linhaNovoCliente.dataset.id = id //criador um id para cada elemento

    return linhaNovoCliente
}
const tabela = document.querySelector('[data-tabela]')

// evento de deletar um usuário
tabela.addEventListener('click', (evento)=>{
    let botaoDeletar = evento.target.className('botao-simples botao-simples--excluir')
    if(botaoDeletar){
        const linhaCliente= evento.target.closet('[data-id]')
        let id = linhaCliente.dataset.id
        clienteService.removeCliente(id)
        .then( ()=> {
            linhaCliente.remove()
        })
    }

})

clienteService.listaClientes()
.then( data=>{
    data.forEach(elemento => {
        tabela.appendChild(criarNovaLinha(elemento.nome, elemento.email, elemento.id))
        // pegou o elemento pai 'tabela' e a função 'tr' como filho
})})


