import React from 'react'
import HeaderItem from '../components/HeaderItem'
import Layout from '../components/Layout'
import Header from '../components/Header'
import ListComments from '../components/ListComments'
import { fetchUser } from '../util/HNService'

export default class extends React.Component {
  static async getInitialProps ({ query: { id } }) {
    const user = await fetchUser(id)

    return { item: user }
  }

  render () {
    const { item } = this.props

    return (
      <Layout>
        <Header title={item.id} />
        <div className="section">
          <div className="container">
            { item.about
            ? <div className="subtitle has-text-grey has-text-centered has-text-weight-normal is-size-3" dangerouslySetInnerHTML={{ __html: item.about }}></div>
            : null
            }
            <p className="subtitle has-text-centered">Since {item.created}</p>
            <p className="subtitle has-text-centered">
              <span className="tag is-link is-medium">{item.karma}</span>
            </p>
          </div>
        </div>
      </Layout>
    )
  }
}
