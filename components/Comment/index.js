import React from 'react'
import ListComments from '../ListComments'

export default ({ item }) => (
  <article className="media">
    <figure className="media-left">
      <p className="image is-64x64">
        <img src="/static/user-default.png" />
      </p>
    </figure>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>
            {item.user}
          </strong>
          { ` | ` }
          <span className="has-text-grey">
            { item.time_ago }
          </span>
        </p>
        <div className="has-text-grey comment" dangerouslySetInnerHTML={{ __html: item.content }}></div>
      </div>
      <ListComments comments={item.comments} />
    </div>
  </article>
)
