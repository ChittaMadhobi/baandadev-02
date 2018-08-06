import React, { Component } from 'react';

import mktInfo from '../img/mktInfo.png';
import mktConfig from '../img/mktConfig.png';
import mktDashboard from '../img/mktDashboard.png';
import mktInfluncer from '../img/mktInfluncer.png';

class Marketing extends Component {
  constructor() {
    super();
    this.state = {
      mktInfo: true,
      mktConfigure: false,
      mktDashboard: false,
      mktInfluencer: false
    };
  }

  render() {
    let finContext;

    if (this.state.mktInfo) {
      finContext = (
        <div className="fixedsize">
          <div className="workarea-padding">
            <div className="pictures">
              <img src={mktInfo} width="100%" height="100%" alt="..." />
            </div>
          </div>
        </div>
      );
    }

    if (this.state.mktConfigure) {
      finContext = (
        <div className="fixedsize">
          <div className="workarea-padding">
            <div className="pictures">
              <img src={mktConfig} width="100%" height="100%" alt="..." />
            </div>
          </div>
        </div>
      );
    }

    if (this.state.mktDashboard) {
      finContext = (
        <div className="fixedsize">
          <div className="workarea-padding">
            <div className="pictures">
              <img src={mktDashboard} width="100%" height="100%" alt="..." />
            </div>
          </div>
        </div>
      );
    }

    if (this.state.mktInfluencer) {
      finContext = (
        <div className="fixedsize">
          <div className="workarea-padding">
            <div className="pictures">
              <img src={mktInfluncer} width="100%" height="100%" alt="..." />
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="finance">
        <p className="top-padding" />
        <div className="container">
          <p className="top-padding-workarea" />
          <h4 className="display-5 text-center">
            Marketing, Survey, and Influencer
          </h4>
          <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="demobuttons">
                <button
                  className="btn btn-lg btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      mktInfo: true,
                      mktConfigure: false,
                      mktDashboard: false,
                      mktInfluencer: false
                    }));
                  }}
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Informs you about Baanda Financial Systems"
                >
                  Informations
                </button>
              </div>
              <div className="demobuttons">
                <button
                  className="btn btn-lg btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      mktInfo: false,
                      mktConfigure: true,
                      mktDashboard: false,
                      mktInfluencer: false
                    }));
                  }}
                >
                  Configure
                </button>
              </div>
              <div className="demobuttons">
                <button
                  className="btn btn-lg btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      mktInfo: false,
                      mktConfigure: true,
                      mktDashboard: true,
                      mktInfluencer: false
                    }));
                  }}
                >
                  Dashboard
                </button>
              </div>
              <div className="demobuttons">
                <button
                  className="btn btn-lg btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      mktInfo: false,
                      mktConfigure: false,
                      mktDashboard: false,
                      mktInfluencer: true
                    }));
                  }}
                >
                  Influencer
                </button>
              </div>
            </div>
            <div className="col-lg-10 col-md-8 col-sm-6">
              <div className="fixedsize">{finContext}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Marketing;
