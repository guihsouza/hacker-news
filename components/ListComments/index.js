import React from 'react'
import Comment from '../Comment'
import Loading from '../Loading'
import { asyncReactor } from 'async-reactor'

const getItems = commentsId => {
  return commentsId.map(id => <Comment key={ id } itemID={ id } />)
}

const ListComments = async ({ commentsId }) => {
  return (
    <div>
      { getItems(commentsId) }
    </div>
  )
}

export default asyncReactor(ListComments, Loading)
