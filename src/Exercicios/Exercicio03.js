import React from 'react'

function Exercicio03() {

    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const numerosPares =  numeros.filter((item) => item % 2 === 0)

  return (
    <div>
        <h2>Exercicio03</h2>
        {numerosPares.map((num) => (
            <span>Numero Par: {`${num} `}</span>

        ))}
    </div>

  )
}

export default Exercicio03