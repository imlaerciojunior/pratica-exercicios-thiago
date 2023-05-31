import React from 'react'

function Exercicio02({post}) {

    
  return (
    <div>
      <h1>Exercicio 2</h1>
      {post.map((item) => (
        <div key={item.id}>
          <li>{item.title}</li>
          <li>{item.content}</li>
        </div>
      ))}
      
    </div>
  )
  }

export default Exercicio02