/*
**  Author: Jit (Sarbojit Mukherjee)
**  Desc:   Provides the basic landing for Baanda with two opetions ... to chat with Baanda
**          or login / signin to get to the lobby
**  Note:   Every program and aspects of Baanda_dev, as of this day, is being coded and handled by Jit
**  Date:   Julye 9, 2018
**  Version:0.01
*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Landing extends Component {
  // If someone use URL host:port/login ... it should not take to login if already so
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/lobby');
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Baanda</h1>
                <p className="lead">
                  {' '}
                  A society forged with cooperation among peers
                </p>
                <hr />
                <Link
                  to="/baandaReception"
                  className="btn btn-lg btn-info mr-2"
                >
                  Reception
                </Link>
                <Link to="/lobby" className="btn btn-lg btn-light">
                  The Lobby
                </Link>

                <br />
                <br />
                <p className="h4">
                  Please login or register to get to the lobby
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
