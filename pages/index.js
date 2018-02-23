import React from 'react'
import Firebase from '../services/Firebase'
import Layout from '../layouts/Default/'
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
    return this.props.ids.map(id => <Item key={id} itemID={id} />)
  }

  render () {
    return (
      <Layout>
        {this.getItems()}
      </Layout>
    )
  }
}
