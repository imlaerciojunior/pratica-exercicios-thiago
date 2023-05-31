// Exercício 7:

// Crie 2 inputs um chamado nome e outro chamado EMAIL ! usando a lógica que 
// você aprendeu de controlar os inputs ! Controle os inputs usando useState.
// Ao termino disso ! Agora crie uma função que checa se os campos foram preenchidos
// ao apertar um botão de enviar, porém caso estejam vazios diga que o campo esta vazio em um alert.
// Caso os campos estejam preenchidos apareça o alerta dizendo que esta correto e com as informações.

// EXEMPLO: const [nome, setNome] = useState("");
//          const [email, setEmail] = useState("");

// BONUS: AO FINALIZAR ATIVIDADE LEMBRE-SE DE CONCEITOS DE UX OU SEJA SE USUARIO QUISER DIGITAR
// OUTRA COISA NESSES INPUTS VAI TER APAGAR OQUE JÁ DIGITOU MANUALMENTE, ENTÃO TODA VEZ QUE VOCÊ ENVIAR
// ESSA REQUISIÇÃO, LEMBRE QUE OS CAMPOS DO INPUTS DEVEM SER ZERADOS. PARA USUARIO DIGITAR NOVAMENTE
// SEM PRECISAR APAGAR.

import React, { useState } from 'react'

function Exercicio13() {

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")

    const handleForm = (event) => {
        event.preventDefault()
        if (nome === "" || email === ""){
            alert("Favor preencher as informações do formulário")
        } else{
            alert(`As informações de nome: ${nome} e email: ${email} estão corretas!`)
        }
        setNome("")
        setEmail("")
    }

  return (
    <div>
        <h1>Exercicio13</h1>
        <form>
            <label>
                Nome:
                <input type='text'
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                />
            </label>
            <br/>
            <label>
                Email:
                <input type='email'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                />
            </label>
            <br/>
            <button 
            type='submit'
            onClick={handleForm}
            >Enviar</button>
        </form>
    </div>
  )
}

export default Exercicio13