import React from 'react'
import Navbar from '../Navbar'

export default ({ title, children }) => (
  <div>
    <Navbar />

    <header className="hero is-link">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-capitalized">{ title }</h1>

          { children }
        </div>
      </div>
    </header>
  </div>
)
