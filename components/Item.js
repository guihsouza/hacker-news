import React from 'react'
import Firebase from '../services/Firebase'
import { asyncReactor } from 'async-reactor';

const Loading = () => <h2>Carregando...</h2>

const Item = async ({ itemID }) => {
  // eslint-disable-next-line no-undef
  const fs = Firebase.child(`item/${itemID}`).once('value')
  const res = await fs
  const item = res.val()

  return (
    <div>
      <h2>
        <a href={item.url}>
          {item.title}
        </a>
      </h2>
      <p>{`@${item.by}`}</p>
      <small>Comments: {item.kids.length}</small>
      <hr />
    </div>
  )
}

export default asyncReactor(Item, Loading)
