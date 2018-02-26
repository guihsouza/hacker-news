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

  render () {
    const { item } = this.props

    return (
      <Layout>
        <HeaderItem item={ item } />
        <div className="section">
          <div className="container">
            <ListComments comments={ item.comments } />
          </div>
        </div>
      </Layout>
    )
  }
}
