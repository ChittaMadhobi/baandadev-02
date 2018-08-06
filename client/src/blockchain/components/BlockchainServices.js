import React, { Component } from 'react';

// import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import blockchainInfo from '../img/blockchainInfo.png';
import copyrightBC from '../img/copyrightBC.png';
import escrowBC from '../img/escrowBC.png';
import softchainBC from '../img/softchainBC.png';

class BlockchainServices extends Component {
  constructor() {
    super();
    this.state = {
      blockchainInfo: true,
      copyrightMgmt: false,
      escrowMgmt: false,
      softchain: false
    };

    this.onChange = this.onChange.bind(this);
    //this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount()');
    if (this.props.auth.isAuthenticated) {
      this.setState({ name: this.props.auth.user.name });
      // console.log(
      //   'onMount .. isAuthenticated is true name:' + this.props.auth.user.name
      // );
      // console.log('this state name : ' + this.state.name);
    } else {
      if (this.state.start) {
        return <Redirect to="/" />;
      }
      // console.log('onmount .. isAuthenticated is FALSE');
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    let blockchainPanel;

    if (this.state.blockchainInfo) {
      blockchainPanel = (
        <div className="fixedsize">
          <div className="workarea-padding">
            <img src={blockchainInfo} width="100%" height="100%" alt="..." />
          </div>
        </div>
      );
    }
    if (this.state.copyrightMgmt) {
      blockchainPanel = (
        <div className="fixedsize">
          <div className="workarea-padding">
            <div className="pictures">
              <img src={copyrightBC} width="100%" height="100%" alt="..." />
            </div>
          </div>
        </div>
      );
    }

    if (this.state.escrowMgmt) {
      blockchainPanel = (
        <div className="fixedsize">
          <div className="workarea-padding">
            <div className="pictures">
              <img src={escrowBC} width="100%" height="100%" alt="..." />
            </div>
          </div>
        </div>
      );
    }

    if (this.state.softchain) {
      blockchainPanel = (
        <div className="fixedsize">
          <div className="workarea-padding">
            <div className="pictures">
              <img src={softchainBC} width="100%" height="100%" alt="..." />
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="blockchain">
        <p className="top-padding" />
        <div className="container">
          <p className="top-padding-workarea" />
          <h4 className="display-5 text-center">
            <b>Blockchain based Services</b>
          </h4>
          <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="demobuttons">
                <button
                  className="btn btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      blockchainInfo: true,
                      copyrightMgmt: false,
                      escrowMgmt: false,
                      softchain: false
                    }));
                  }}
                >
                  About BC
                </button>
              </div>
              <div className="demobuttons">
                <button
                  className="btn btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      blockchainInfo: false,
                      copyrightMgmt: true,
                      escrowMgmt: false,
                      softchain: false
                    }));
                  }}
                >
                  Copyright
                </button>
              </div>
              <div className="demobuttons">
                <button
                  className="btn btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      blockchainInfo: false,
                      copyrightMgmt: false,
                      escrowMgmt: true,
                      softchain: false
                    }));
                  }}
                >
                  Escrow
                </button>
              </div>
              <div className="demobuttons">
                <button
                  className="btn btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      blockchainInfo: false,
                      copyrightMgmt: false,
                      escrowMgmt: false,
                      softchain: true
                    }));
                  }}
                >
                  Softchain
                </button>
              </div>
            </div>
            <div className="col-lg-10 col-md-8 col-sm-6">{blockchainPanel}</div>
          </div>
        </div>
      </div>
    );
  }
}

BlockchainServices.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(BlockchainServices);
