// Exercício 4:
// Crie uma lista de objetos contendo nome e idade utilizando useState e map. Em seguida, 
// filtre os objetos cuja idade é menor que 18 utilizando filter e exiba-os.

// EXEMPLO:  { nome: "Alice", idade: 25 },
//           { nome: "Bob", idade: 17 },
//           { nome: "Carol", idade: 32 },
//           { nome: "David", idade: 14 },
//            { nome: "Eve", idade: 19 },

import React, { useState } from 'react'

const Exercicio10 = () => {

    const [listaObjetos, setListaObjetos] = useState([
        { nome: "Alice", idade: 25 },
        { nome: "Bob", idade: 17 },
        { nome: "Carol", idade: 32 },
        { nome: "David", idade: 14 },
        { nome: "Eve", idade: 19 }
    ])

    const listaFiltered = listaObjetos.filter((item) => item.idade < 18)

    return (
    <div>
      <h1>Exercicio 10</h1>
      <div>
        Os cidadãos com idade inferior a 18 anos são:
        {listaFiltered.map((item, index) => (
            <div key={index}>
                <li> {`${item.nome}: ${item.idade} anos`}</li>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Exercicio10