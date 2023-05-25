import React from 'react'
import ExemploFilter from './ExemploFilter'
import ExemploMap from './ExemploMap'
import Exercicio02 from './Exercicio02'
import Exercicio01 from './Exercicio01'
import Exercicio03 from './Exercicio03'
import Exercicio04 from './Exercicio04'
import Exercicio05 from './Exercicio05'
import Exercicio06 from './Exercicio06'

const HomeExercicio = () => {
  const posts = [
    { id: 1, title: 'Post 1', content: 'Conteúdo do post 1' },
    { id: 2, title: 'Post 2', content: 'Conteúdo do post 2' },
    { id: 3, title: 'Post 3', content: 'Conteúdo do post 3' }
];


  return (
    <div>
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
    </div>
  )
}

export default HomeExercicio