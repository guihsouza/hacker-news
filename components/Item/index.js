import React from 'react'
import Link from 'next/link'
import Firebase from '../../services/Firebase'
import { asyncReactor } from 'async-reactor';

const Loading = () => <h2>Carregando...</h2>

const Item = async ({ itemID }) => {
  // eslint-disable-next-line no-undef
  const fs = Firebase.child(`item/${itemID}`).once('value')
  const res = await fs
  const item = res.val()

  return (
    <div className="section">
      <h2 className="title">
        <a href={item.url}>{item.title}</a>
      </h2>
      <p className="subtitle">{`@${item.by}`}</p>
      <p>
        <small>
          <Link href={`detail/${item.id}`}>
            <a>Comments: {item.kids.length}</a>
          </Link>
        </small>
      </p>
    </div>
  )
}

export default asyncReactor(Item, Loading)
