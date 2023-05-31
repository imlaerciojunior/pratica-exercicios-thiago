// Exercício 1:
// Crie uma lista de nomes utilizando useState e map. Em seguida, 
// filtre os nomes que contêm a letra 'a' utilizando filter e exiba-os.

// EXEMPLO: ["Alice", "Bob", "Carol", "David", "Eve"]

import React, { useState } from 'react'

function Exercicio7() {

  const nomes = ["Alice", "Bob", "Carol", "David", "Eve"]

  const [namesList, setNameList] = useState(nomes)

  const namesFiltered = namesList.filter((item) => item.toLowerCase().includes('a'))

  console.log(namesList)
  console.log(namesFiltered)

return (
  <div>
    <h1>Lista 2</h1>
    <h1>Exercicio 7</h1>
    {namesFiltered.map((item, index) => (
      <ul key={index}>
        <li>{item}</li>
      </ul>
    ))}
  </div>
)
}

export default Exercicio7