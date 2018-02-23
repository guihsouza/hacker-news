import React from 'react'
import Link from 'next/link'
import Loading from '../Loading'
import Firebase from '../../services/Firebase'
import { asyncReactor } from 'async-reactor'

const ErrorH = e => {
  console.log(e)
  return <h2>Erro</h2>
}

const Item = async ({ itemID }) => {
  // eslint-disable-next-line no-undef
  const fs = Firebase.child(`item/${ itemID }`).once('value')
  const res = await fs
  const item = res.val()

  return (
    <div className="hero">
      <div className="hero-body">
        <div className="container">
          <h2 className="title">
            <a href={ item.url }>{ item.title }</a>
          </h2>
          <p className="subtitle">{`@${ item.by }`}</p>
          <p>
            <small>
              <Link href={`detail/${ item.id }`}>
                <a>Comments: { typeof item.kids !== 'undefined' ? item.kids.length : 0 }</a>
              </Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  )
}

export default asyncReactor(Item, Loading, ErrorH)
