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

export default () => (
  <div>
    <div className="navbar" />
    <nav className="navbar is-link is-fixed-top">
      <div className="navbar-brand">
        <Link href="/best">
          <a className="navbar-item">Hacker news</a>
        </Link>
        <div className="navbar-burger burger" data-target="main-navbar">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="main-navbar" className="navbar-menu">
        <div className="navbar-end">
          { getLinks() }
        </div>
      </div>
    </nav>
  </div>
)
