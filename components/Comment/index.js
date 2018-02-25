import React from 'react'
import Link from 'next/link'
import ListComments from '../ListComments'

export default ({ item }) => (
  <article className="media">
    <figure className="media-left">
      <p className="image is-64x64">
        <img src="/static/images/user-default.jpg" alt={`Default image for user @${item.user}`} />
      </p>
    </figure>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>
            <Link href={`/user/${ item.user }`}>
              <a>{ `@${item.user}` }</a>
            </Link>
          </strong>
          { ` | ` }
          <span className="has-text-grey-dark">
            { item.time_ago }
          </span>
        </p>
        <div className="has-text-grey-dark comment" dangerouslySetInnerHTML={{ __html: item.content }}></div>
      </div>
      <ListComments comments={item.comments} />
    </div>
  </article>
)
