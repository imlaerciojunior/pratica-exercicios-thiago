import React from 'react'

function Exercicio04() {
    const usuarios = [
        { id: 1, nome: 'Alice', idade: 25 },
        { id: 2, nome: 'Bob', idade: 17 },
        { id: 3, nome: 'Carol', idade: 20 },
        { id: 4, nome: 'David', idade: 16 }
        ];
    
    const filterUsuarios = usuarios.filter((item) => item.idade >= 20)
  return (
    <div>
        <h1>Exercicio 4</h1>
        <div>
            {filterUsuarios.map((item) => (
                <li>{`${item.nome}: ${item.idade}anos`}</li>
             ))} 
        </div>
    </div>
  )
}

export default Exercicio04