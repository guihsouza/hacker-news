import React from 'react'
import Link from 'next/link'

export default class extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isActive: false,
      items: [{
        to: '/best',
        title: 'Best'
      }, {
        to: '/news',
        title: 'News'
      }, {
        to: '/show',
        title: 'Show'
      }, {
        to: '/ask',
        title: 'Ask'
      }, {
        to: '/jobs',
        title: 'Jobs'
      }]
    }

    this.getLinks = this.getLinks.bind(this)
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  getLinks() {
    const { items } = this.state

    return items.map(item => {
      return (
        <Link href={ item.to } key={ item.to }>
          <a className="navbar-item">{ item.title }</a>
        </Link>
      )
    })
  }

  toggleNavbar() {
    this.setState({isActive: !this.state.isActive})
  }

  render() {
    return (
      <div>
        <div className="navbar" />
        <nav className="navbar is-link is-fixed-top">
          <div className="navbar-brand">
            <Link href="/best">
              <a className="navbar-item">Hacker News</a>
            </Link>
            <div className={(this.state.isActive ? 'is-active' : '') + ' navbar-burger burger'} data-target="main-navbar" onClick={() => this.toggleNavbar()}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="main-navbar" className={(this.state.isActive ? 'is-active' : '') + ' navbar-menu'}>
            <div className="navbar-end">
              { this.getLinks() }
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
