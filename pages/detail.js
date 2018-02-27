import React from 'react'
import HeaderItem from '../components/HeaderItem'
import Layout from '../components/Layout'
import ListComments from '../components/ListComments'
import { fetchItem } from '../util/HNService'

export default class extends React.Component {
  static async getInitialProps ({ query: { id } }) {
    const detail = await fetchItem(id)
    return { item: detail }
  }

  getComments(item) {
    if (typeof item.comments == 'undefined') return <h2 className="subtitle has-text-centered">0 comments</h2>

    return <ListComments comments={ item.comments } />
  }

  render () {
    const { item } = this.props

    return (
      <Layout>
        <HeaderItem item={ item } />
        <div className="section">
          <div className="container">
            {this.getComments(item)}
          </div>
        </div>
      </Layout>
    )
  }
}
