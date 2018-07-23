/*
**  Author: Jit (Sarbojit Mukherjee)
**  Desc:   Provies navigation to landing, lobby, signup, or signin based on state of user's authenticaiton.
**          
**  Date:   Julye 9, 2018
**  Version:0.01
*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/authActions';
//import { Redirect } from 'react-router-dom';

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
    console.log('Logged out user');
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    // if (!isAuthenticated) {
    //   console.log('render, NOT or !isAuthenticated in Navbar');
    //   //this.props.history.push('/');
    // } else {
    //   console.log('render, isAuthenticated in Navbar');
    // }

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a
            href=""
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
          >
            {user.name} &nbsp;&nbsp;
            <img
              className="rounded-circle"
              src={user.avatar}
              style={{ width: '25px', marginRight: '5px' }}
              alt={user.name}
              title="You email should be Gravitar"
            />{' '}
            Logout
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4 fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Baanda
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/lobby">
                  {' '}
                  Lobby
                </Link>
              </li>
            </ul>
            {isAuthenticated ? authLinks : guestLinks}
            }
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
