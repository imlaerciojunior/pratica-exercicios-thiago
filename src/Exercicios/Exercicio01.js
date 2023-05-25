import React from 'react'

function Exercicio01() {

    const nomes = ['Alice', 'Bob', 'Carol', 'David'];

  return (
    <div>
    <h1>Exercicio01</h1>
        {nomes.map((item, index) =>(
            <div key={index}>
                <li>{item}</li>
            </div>

        ))}
    </div>
  )
}

export default Exercicio01