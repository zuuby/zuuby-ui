import React from 'react';
import logo from './resources/images/zuuby_logo.png';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <a href="/"><img src={logo} className="Header-logo" alt="logo" /></a>
        <h1 className="Header-title">
          This is only the beginning!
        </h1>
      </header>
    );
  }
}

export default Header;
