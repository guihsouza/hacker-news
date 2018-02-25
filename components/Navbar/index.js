import React from 'react'
import Link from 'next/link'

const Links = [{
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

const getLinks = () => {
  return Links.map(link => {
    return (
      <Link href={ link.to } key={ link.to }>
        <a className="navbar-item">{ link.title }</a>
      </Link>
    )
  })
}

export default class extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isActive: false
    }

    this.toggleNavbar.bind(this)
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
              <a className="navbar-item">Hacker news</a>
            </Link>
            <div className={(this.state.isActive ? 'is-active' : '') + ' navbar-burger burger'} data-target="main-navbar" onClick={() => this.toggleNavbar()}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="main-navbar" className={(this.state.isActive ? 'is-active' : '') + ' navbar-menu'}>
            <div className="navbar-end">
              { getLinks() }
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
