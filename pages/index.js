import React from 'react'
import Link from 'next/link'
import Firebase from '../services/Firebase'
import Layout from '../components/Layout'
import Item from '../components/Item'
import 'isomorphic-unfetch'

export default class extends React.Component {
  static async getInitialProps () {
    // eslint-disable-next-line no-undef
    const fs = Firebase.child('topstories').once('value')
    const ids = await fs

    return { ids: ids.val() }
  }

  getItems() {
    return this.props.ids.map(id => {
      return (
        <Item key={id} itemID={id} />
      )
    })
  }

  render () {
    return (
      <Layout>
        {this.getItems()}
        <Link prefetch href='/preact'><a>How about preact?</a></Link>
      </Layout>
    )
  }
}
