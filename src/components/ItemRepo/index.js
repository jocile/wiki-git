import React from 'react'

import { ItemContainer } from './styles'
function ItemRepo() {
  return (
    <ItemContainer>
      <h3>Jocile</h3>
      <p>Search for an item...</p>
      <hr />
      <a href="#">Ver repositório</a><br />
      <a href="#" className="remover">Remover</a>
    </ItemContainer>
  )
}

export default ItemRepo
