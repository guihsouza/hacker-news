import React from 'react'
import Firebase from '../services/Firebase'
import Layout from '../layouts/Default/'
import Item from '../components/Item'
import ListComments from '../components/ListComments'
import 'isomorphic-unfetch'

export default class extends React.Component {
  static async getInitialProps ({ query: { id } }) {
    // eslint-disable-next-line no-undef
    const fs = Firebase.child(`item/${ id }`).once('value')
    const item = await fs

    return { item: item.val() }
  }

  render () {
    const { item } = this.props

    return (
      <Layout title={ item.title }>
        <div className="section">
          <p>{ item.by }</p>
          <p>{ item.score }</p>
          <ListComments commentsId={ item.kids } />
        </div>
      </Layout>
    )
  }
}
