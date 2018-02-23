import React from 'react'
import Navbar from '../Navbar'

export default ({ title }) => {
  return (
    <div>
      <Navbar />

      <header className="hero is-link">
        <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">{ title }</h1>
          </div>
        </div>
      </header>
    </div>
  )
}
