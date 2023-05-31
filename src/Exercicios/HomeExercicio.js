import React from 'react'
import ExemploFilter from './ExemploFilter'
import ExemploMap from './ExemploMap'
import Exercicio02 from './Exercicio02'
import Exercicio01 from './Exercicio01'
import Exercicio03 from './Exercicio03'
import Exercicio04 from './Exercicio04'
import Exercicio05 from './Exercicio05'
import Exercicio06 from './Exercicio06'
import Exercicio7 from '../Exercicios2/Exercicio7'
import Exercicio8 from '../Exercicios2/Exercicio8'
import Exercicio9 from '../Exercicios2/Exercicio9'
import Exercicio10 from '../Exercicios2/Exercicio10'
import Exercicio11 from '../Exercicios2/Exercicio11'
import Exercicio12 from '../Exercicios2/Exercicio12'
import Exercicio13 from '../Exercicios2/Exercicio13'
import Exercicio14 from '../Exercicios2/Exercicio14'

const HomeExercicio = () => {
  const posts = [
    { id: 1, title: 'Post 1', content: 'Conteúdo do post 1' },
    { id: 2, title: 'Post 2', content: 'Conteúdo do post 2' },
    { id: 3, title: 'Post 3', content: 'Conteúdo do post 3' }
];


  return (
    <div>
      <h1>Lista 1</h1>
      <ExemploFilter/>
      <ExemploMap/>
      <hr/>
      <Exercicio01/>
      <hr/>
      <Exercicio02 post={posts}/>
      <hr/>
      <Exercicio03/>
      <hr/>
      <Exercicio04/>
      <hr/>
      <Exercicio05/>
      <hr/>
      <Exercicio06/>
      <hr/>
      <Exercicio7/>
      <hr/>
      <Exercicio8/>
      <hr/>
      <Exercicio9/>
      <hr/>
      <Exercicio10/>
      <hr/>
      <Exercicio11/>
      <hr/>
      <Exercicio12/>
      <hr/>
      <Exercicio13/>
      <hr/>
      <Exercicio14/>
    </div>
  )
}

export default HomeExercicio