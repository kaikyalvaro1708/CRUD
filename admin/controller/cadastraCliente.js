import { clienteService } from "../service/cliente-service";

const formulário = document.querySelector('[data-form]');

// função para percorrer os campos de nome e email
formulário.addEventListener('submit', (evento)=>{
    evento.defaultPrevented()
    //evento está substituindo o document.querySelector
    const nome = evento.target.querySelector('[data-nome]').value
    const email = evento.target.querySelector('[data-email]').value

    clienteService.criaCliente(nome, email) //pegando a função 
    .then(()=>{ //envia para uma nova telas
        window.location.href = '../telas/cadastro_concluido.html' 
    })
})