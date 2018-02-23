import React from 'react'
import Comment from '../Comment';
import { asyncReactor } from 'async-reactor';

const Loading = () => <h2>Carregando...</h2>

const getItems = commentsId => {
  return commentsId.map(id => <Comment key={id} itemID={id} />)
}

const ListComments = async ({ commentsId }) => {
  return (
    <div>
      {getItems(commentsId)}
    </div>
  )
}

export default asyncReactor(ListComments, Loading)
