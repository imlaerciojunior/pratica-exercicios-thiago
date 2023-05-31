import React from 'react'

// const Exercicio06 = () => {
//   const cores = ["vermelho", "azul", "amarelo", "verde", "roxo"];
//   const corPrima = "vermelho";

//   const coresSearch = [];

//   cores.forEach((cor) => {
//     if (["vermelho", "azul", "amarelo"].includes(cor)) {
//       coresSearch.push(cor);
//     }
//   })

const Exercicio06 = () => {
const cores = ["vermelho", "azul", "amarelo", "verde", "roxo"];

  const coresPrimarias = cores.filter((item) =>
    ["vermelho", "azul", "amarelo"].includes(item)
  );

  return (
    <div>
      <h1>Exercio 6</h1>
      {coresPrimarias.map((cor, index) => (
        <div key={index}>
          <ul>
            <li>{cor}</li>
          </ul>
        </div>
      ))}
    </div>
  )
}


export default Exercicio06