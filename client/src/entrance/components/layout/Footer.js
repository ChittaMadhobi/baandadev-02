import React, { Component } from 'react';

import logo from '../../img/baandalogo-2.png';

class Footer extends Component {
  render() {
    return (
      <footer className="container-fluid">
        <nav className="navbar fixed-bottom navbar-expand-sm bg-dark navbar-dark justify-content-center text-light">
          Copyright &copy; {new Date().getFullYear()} Baanda &nbsp;{' '}
          <img className="logo" src={logo} alt="logo" />
        </nav>
      </footer>
    );
  }
  z;
}

export default Footer;
