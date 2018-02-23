import React from 'react';
import Navbar from '../Navbar';

const Header = ({ title }) => {
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
};

export default Header;
