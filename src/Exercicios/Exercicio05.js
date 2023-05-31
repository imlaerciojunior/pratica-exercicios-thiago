import React from 'react'

function Exercicio05() {
    const produtos = [
        { id: 1, nome: 'Camiseta', preco: 30 },
        { id: 2, nome: 'Calça', preco: 70 },
        { id: 3, nome: 'Tênis', preco: 100 },
        { id: 4, nome: 'Boné', preco: 20 }
        ];
    
        const filterProdutos = produtos.filter((item) => item.preco > 30)
  return (
    <div>
        <h1>Exercicio 5</h1>
        <div key={produtos.id}>
            {filterProdutos.map((item) => (
                <li>{`${item.nome}: R$${item.preco}`}</li>
            ))} 
        </div>
    </div>
  )
}

export default Exercicio05