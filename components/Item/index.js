import React from 'react'
import Link from 'next/link'

export default ({ item }) => (
  <article className="media">
    <figure className="media-left">
      <p className="image is-48x48 has-text-centered is-size-4">
        { item.points }
      </p>
    </figure>
    <div className="media-content is-visible">
      <div className="content">
        <h2 className="title is-4">
          <Link href={ item.url }>
            <a target="_blank">{ item.title }</a>
          </Link>
        </h2>
        <p className="subtitle is-6">
          <Link href={`/detail/${ item.id }`}>
            <a>{ item.comments_count } comments</a>
          </Link>
          {` | `}
          <strong className="has-text-grey-dark">
            <Link href={`/user/${ item.user }`}>
              <a>{ `@${item.user}` }</a>
            </Link>
          </strong>
          {` | `}
          <small>{ item.time_ago }</small>
        </p>
      </div>
    </div>
  </article>
)
