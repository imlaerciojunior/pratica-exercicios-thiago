// Exemplo 8: 
// EXERCIO VAI USAR TODA SUA LÓGICA ATÉ AQUI LEMBRE-SE DE NÃO SE SABOTAR CONFIE NO SEU PONTENCIAL E SE DEIXE
// LEVAR VOCê CONSEGUE !!!

// Calculadora de IMC
// Neste exemplo, criaremos uma calculadora de Índice de Massa Corporal (IMC). O usuário informará sua altura e peso nos inputs, e ao submeter o formulário, a função calcularIMC será executada, realizando o cálculo do IMC e exibindo o resultado.

// DICA: 
//    const [altura, setAltura] = useState("");
//    const [peso, setPeso] = useState("");
//    const [resultado, setResultado] = useState(null);
   
//    CALCULO:
   
//    Desevolvido pela Organização Mundial de Saúde (OMS), o cálculo do peso ideal é feito utilizando a fórmula IMC = peso / (altura x altura).

import React, { useState } from 'react'

function Exercicio14() {

    const [altura, setAltura] = useState(0)
    const [peso, setPeso] = useState(0)
    const [resultado, setResultado] = useState(null)

    const calcularIMC = (event) => {
        event.preventDefault()
        const calculo = peso / (altura * altura)
        const arrendodamento = calculo.toFixed(2)

        setResultado(arrendodamento)

        alert(`o resultado do seu IMC é: ${arrendodamento}`)
    }
    


  return (
    <div>
        <h1>Exercicio14</h1>
        <form>
            <label>
                Altura (m):
                <input
                type='number'
                value={altura}
                onChange={(event) => setAltura(event.target.value)}
                />
            </label>
            <br/>
            <label>
                Peso (kg):
                <input
                type='number'
                value={peso}
                onChange={(event) => setPeso(event.target.value)}
                />
            </label>
            <br/>
            <button
            type='submit'
            onClick={calcularIMC}
            >Calcular</button>
        </form>
    </div>
  )
}

export default Exercicio14