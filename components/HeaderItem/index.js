import React from 'react'
import Link from 'next/link'
import Header from '../Header'

export default ({ item }) => (
  <Header title={ item.title }>
    <div>
      <h3 className="subtitle">
        <Link href={`/user/${ item.user }`}>
          <a>@{item.user}</a>
        </Link>
      </h3>
      <a href={ item.url } className="button is-white" target="_blank" rel="noopener">View story</a>
    </div>
  </Header>
)
