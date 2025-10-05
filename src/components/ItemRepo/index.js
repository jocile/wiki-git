import React from 'react'

import { ItemContainer } from './styles'
function ItemRepo({repo}) {
  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <h4>{repo.full_name}</h4>
      <p>{repo.description}</p>
      <p>Linguagem: {repo.language}</p>
      <p>Tópicos: {repo.topics.join(', ')}</p>
      <a href={repo.html_url} target='_blank' rel="noopener noreferrer">Ver repositório</a><br />
      <a href="#" className="remover">Remover</a>
    </ItemContainer>
  )
}

export default ItemRepo
