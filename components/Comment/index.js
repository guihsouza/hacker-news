import React from 'react'
import Loading from '../Loading'
import Firebase from '../../services/Firebase'
import { asyncReactor } from 'async-reactor'

const Deleted = () => <h2>Comentário removido</h2>

const Item = async ({ itemID }) => {
  // eslint-disable-next-line no-undef
  const fs = Firebase.child(`item/${ itemID }`).once('value')
  const res = await fs
  const item = res.val()

  if (item.deleted) return <Deleted />

  return (
    <div>
      <p className="content">{ item.text }</p>
      <p>{`@${ item.by }`}</p>
      <hr />
    </div>
  )
}

export default asyncReactor(Item, Loading)
