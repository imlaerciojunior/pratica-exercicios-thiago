// Exercício 6:
// Crie uma lista de números utilizando useState e map. Em seguida, 
// verifique se todos os números são pares utilizando filter e includes. Exiba o resultado.

//  EXEMPLO: [2, 4, 6, 8, 10]

//  FAÇA TAMBÉM INFEM TERNÁRIO PARA DIZER ! SE SÃO TODOS PARES OU SE POSSUE IMPAR

import React, { useState } from 'react'

const Exercicio12 = () => {

    const [list, setList] = useState([2, 4, 6, 8, 10, 13, 15, 100])

    const todosPares = list.includes((item) => item % 2 === 0)

    const paresFiltered = list.filter((item) => item % 2 === 0)

    return (
    <div>
      <h1>Exercicio 12</h1>
      <p>
        Os elementos pares da lista são:
        {todosPares ? list.map((item) => (
            <div>
                <li>{item}</li>
            </div>
            )) : paresFiltered.map((item) => (
            <div>
                <li>{item}</li>
            </div>))
        }
      </p>
    </div>
  )
}
export default Exercicio12