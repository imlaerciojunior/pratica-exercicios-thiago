// Exercício 3:
// Crie uma lista de palavras utilizando useState e map. Em seguida,
//  verifique se a palavra "Panda" está presente na lista utilizando includes e 
//  exiba o resultado.

//  ["Dragão", "Cachorro", "Fada", "Panda"]

import React, { useState } from 'react'

const Exercicio9 = () => {

  const lista = ["Dragão", "Cachorro", "Fada", "Panda"]

  const [animais, setAnimais] = useState(lista)

  const temPanda = [animais.includes('Panda')]
 
  return (
  <div>
    <h1>Exercicio 9</h1>
    {temPanda.map((item) => (
      <div>
          {`Panda está incluso na lista de animais? ${item}`}
      </div>
    ))}
  </div>
)
}

export default Exercicio9