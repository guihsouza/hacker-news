import React from 'react'
import Header from '../Header'

export default ({ item }) => (
  <Header title={ item.title }>
    <div>
      <h3 className="subtitle">{ item.user ? `@${item.user}` : null }</h3>
      <a href={ item.url } className="button is-white" target="_blank">View story</a>
    </div>
  </Header>
)
