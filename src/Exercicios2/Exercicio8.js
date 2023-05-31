// Exercício 2:
// Crie uma lista de números utilizando useState e map. Em seguida, 
// filtre os números maiores que 5 utilizando filter e exiba-os.

// EXEMPLO: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

import React, { useState } from 'react'

const Exercicio8 = () => {

    const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const [array, setArray] = useState(arrayNumeros)

    const arrayFiltered = array.filter((item) => item > 5)

    return (
    <div>
      <h1>Exercicio 8</h1>
      {"Os numeros maiores do que 5 são: "}
      {arrayFiltered.map((item, index) =>(
        <span key={index}>
            <span>{` ${item}`}</span>
        </span>
      ))}
    </div>
  )
}

export default Exercicio8