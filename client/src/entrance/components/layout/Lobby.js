/*
**  Author: Jit (Sarbojit Mukherjee)
**  Desc:   Provies entrance to all sub-modules, or offices in the Baanda building.
**          
**  Date:   Julye 9, 2018
**  Version:0.01
*/
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

//import { Link } from 'react-router-dom';
import Talk from '../../img/talk2.jpg';
import Nook from '../../img/nook1.jpg';
import ServiceXchange from '../../img/servicex1.jpg';
import Marketing from '../../img/marketing1.jpg';
import Copyright from '../../img/copyright2.jpg';
import FinTech from '../../img/finance1.jpeg';
import Healthcare from '../../img/healthcare1.jpg';
import Cooperation from '../../img/cooperation1.jpg';

class Lobby extends Component {
  componentDidMount() {
    // console.log(
    //   'this.props.auth.isAuthenticated:' + this.props.auth.isAuthenticated
    // );
    if (!this.props.auth.isAuthenticated) {
      return <Redirect to="/login" />;
    }
  }

  render() {
    if (!this.props.auth.isAuthenticated) {
      //console.log('render, NOT or !isAuthenticated in Navbar');
      return <Redirect to="/login" />;
    }
    return (
      <div className="lobby">
        <div className="lobbyheader">
          <div className="row text-center text_blue">
            <div className="col-12">
              <div className="headerpic">
                <span className="align-baseline-middle">
                  <h1>Baanda Lobby</h1>
                </span>
                <span className="align-baseline-middle">
                  <h4>The P2P Bazzar for a cooperation based society</h4>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="row text-center">
          <div className="col-md-3 col-sm-6 col-xs-4">
            <div className="thumbnail">
              <img src={Talk} alt="" />
              <div className="caption">
                <p />
                <h6 className="text-center">Intro-Chats & Library</h6>
                <div className="btn-group btn-trigger">
                  <Link
                    to="/baandalibrary"
                    className="btn btn-lg btn-info btn-sm"
                  >
                    Enter & Explore
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 col-xs-4">
            <div className="thumbnail">
              <img src={Nook} alt="" />
              <div className="caption">
                <p />
                <h6 className="text-center">Your Nook</h6>
                <div className="btn-group btn-trigger">
                  <a href="" className="btn btn-info btn-sm">
                    Enter & Explore
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 col-xs-4">
            <div className="thumbnail">
              <img src={ServiceXchange} alt="" />
              <div className="caption">
                <p />
                <h6 className="text-center">Co-op Service Xchange</h6>
                <div className="btn-group btn-trigger">
                  <Link
                    to="/servicexchange"
                    className="btn btn-lg btn-info btn-sm"
                  >
                    Enter & Explore
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 col-xs-4">
            <div className="thumbnail">
              <img src={Marketing} alt="" />
              <div className="caption">
                <p />
                <h6 className="text-center">Messaging & Influencing</h6>
                <div className="btn-group btn-trigger">
                  <a href="" className="btn btn-info btn-sm">
                    Enter & Explore
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 col-xs-4">
            <div className="thumbnail">
              <img src={Copyright} alt="" />
              <div className="caption">
                <p />
                <h6 className="text-center">Copyright digital creation</h6>
                <div className="btn-group btn-trigger">
                  <a href="" className="btn btn-info btn-sm">
                    Enter & Explore
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 col-xs-4">
            <div className="thumbnail">
              <img src={FinTech} alt="" />
              <div className="caption">
                <p />
                <h6 className="text-center">FinTech for Cooperation</h6>
                <div className="btn-group btn-trigger">
                  <a href="" className="btn btn-info btn-sm">
                    Enter & Explore
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 col-xs-4">
            <div className="thumbnail">
              <img src={Healthcare} alt="" />
              <div className="caption">
                <p />
                <h6 className="text-center">Individualized HealthCare</h6>
                <div className="btn-group btn-trigger">
                  <Link to="/healthcare" className="btn btn-lg btn-info btn-sm">
                    Enter & Explore
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 col-xs-4">
            <div className="thumbnail">
              <img src={Cooperation} alt="" />
              <div className="caption">
                <p />
                <h6 className="text-center">Cooperative Life</h6>
                <div className="btn-group btn-trigger">
                  <a href="" className="btn btn-info btn-sm">
                    Enter & Explore
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Lobby.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Lobby);
