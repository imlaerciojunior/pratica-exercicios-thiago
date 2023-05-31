// Exercício 5:
// Crie uma lista de objetos contendo nome, idade e cidade utilizando useState e map. 
// Em seguida, filtre os objetos cuja idade é maior que 30 e a cidade seja "São Paulo"
//  utilizando filter e exiba-os.

//  EXEMPLO:     { nome: "Alice", idade: 25, cidade: "São Paulo" },
//               { nome: "Bob", idade: 35, cidade: "Rio de Janeiro" },
//               { nome: "Carol", idade: 40, cidade: "São Paulo" },
//               { nome: "David", idade: 28, cidade: "São Paulo" },
//               { nome: "Eve", idade: 32, cidade: "São Paulo" },         


import React, { useState } from 'react'

const Exercicio11 = () => {

    const [list, setList] = useState([
        { nome: "Alice", idade: 25, cidade: "São Paulo" },
        { nome: "Bob", idade: 35, cidade: "Rio de Janeiro" },
        { nome: "Carol", idade: 40, cidade: "São Paulo" },
        { nome: "David", idade: 28, cidade: "São Paulo" },
        { nome: "Eve", idade: 32, cidade: "São Paulo" }
    ])

    const listFiltered = list.filter((item) => item.idade > 30 && item.cidade === 'São Paulo')

    return (
    <div>
      <h1>Exercicio 11</h1>
      <div>
        Nome das pessoas que possuem mais de 30 anos e residem em São Paulo: 
        {listFiltered.map((item, index) => (
            <div key={index}>
                <li>{`${item.nome} (${item.idade} anos)`}</li>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Exercicio11