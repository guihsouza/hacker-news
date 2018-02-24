import React from 'react'
import Loading from '../Loading'
import ListComments from '../ListComments'
import Firebase from '../../services/Firebase'
import { asyncReactor } from 'async-reactor'

const Item = async ({ itemID }) => {
  // eslint-disable-next-line no-undef
  const fs = Firebase.child(`item/${ itemID }`).once('value')
  const res = await fs
  const item = res.val()

  if (item.deleted) return null;

  return (
    <article className="media">
      <figure className="media-left">
        <p className="image is-64x64">
          <img src="/static/user-default.png" />
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{item.by}</strong>
            <br/>
            {item.text}
            <br/>
          </p>
        </div>

        {typeof item.kids !== 'undefined' ? <ListComments commentsId={item.kids} /> : null}
      </div>
    </article>
  )
}

export default asyncReactor(Item, Loading)
