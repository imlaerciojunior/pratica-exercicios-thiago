import React from 'react'

const ExemploFilter = () => {

    const Products = [
        {name:"Laércio", peso:90, esporte:"Volei" },
        {name: "Marcela", peso: 50, esporte: "Natação" },
        {name: "João", peso: 70, esporte: "Futebol"},
    ]

    const filteredProducts = Products.filter((item) => item.peso > 50)
    console.log(filteredProducts)

  return (
    <div>
        
    </div>
  )
}

export default ExemploFilter