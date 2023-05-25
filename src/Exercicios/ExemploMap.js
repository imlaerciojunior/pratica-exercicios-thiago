import React from 'react'

const ExemploMap = () => {

  const usuario = [
    {name:"Felipe", banda:"Jonh Cash", talento:"Auto Didata" },
    {name: "Retana", banda: "Nelson Gonçalves", talento: "Adaptação" },
    {name: "Edgar", banda: "Linkin Park", talento: "Criatividade"},
  ]

  return (
    <div>
      {usuario.map((item, index) => (
        <div key={index}>
          <li>{item.name}</li>
          <li>{item.banda}</li>
          <li>{item.talento}</li>
        </div>
      ))}
    </div>
  )
}

export default ExemploMap