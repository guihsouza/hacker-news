import React from 'react'
import HeaderItem from '../components/HeaderItem'
import Layout from '../components/Layout'
import ListComments from '../components/ListComments'
import 'isomorphic-unfetch'

export default class extends React.Component {
  static async getInitialProps ({ query: { id } }) {
    // eslint-disable-next-line no-undef
    const res = await fetch(`https://api.hackerwebapp.com/item/${id}`)
    const json = await res.json()
    return { item: json }
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
