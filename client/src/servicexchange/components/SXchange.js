import React, { Component } from 'react';

import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
//import ReactPlayer from 'react-player';
import Issues from '../img/ServiceXchangeConcernMitigation.png';
import serviceExchangeInfo from '../img/serviceExchangeInfo.png';
import profileMgmt from '../img/profileMgmt.png';
import serviceMgmt from '../img/serviceManagement.png';
import SXcooperation from '../img/SXcooperation.png';
import sxDashboard from '../img/sxDashboard.png';

class SXchange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: false,
      name: '',
      counter: 0,
      question: '',
      answer: '',
      response: ['Hello. I am Baanda. How can I assist?'],
      errors: {},
      defaultSXInfo: true,
      councilorSX: false,
      createManageProfile: false,
      postRequestOrOffergins: false,
      cooperationRequestSearch: false,
      yourDashboard: false,
      serviceXchangeMitigates: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.input = React.createRef();
  }

  componentDidMount() {
    console.log('componentDidMount()');
    if (this.props.auth.isAuthenticated) {
      this.setState({ name: this.props.auth.user.name });
      console.log(
        'onMount .. isAuthenticated is true name:' + this.props.auth.user.name
      );
      console.log('this state name : ' + this.state.name);
    } else {
      if (this.state.start) {
        return <Redirect to="/" />;
      }
      console.log('onmount .. isAuthenticated is FALSE');
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const qq = this.input.current.value;
    // Call getDFResponse
    console.log('onSubmit Q:' + qq);
    if (!this.getDFResponse(qq)) {
      console.log('getDFResponse failed .... :(');
    }
    this.input.current.value = '';
  }

  getDFResponse(question) {
    let baseUrl = 'https://api.api.ai/v1/';
    //let url = baseUrl + 'query?v=20170712';
    // console.log('url = ' + url);
    //=========== IMPORTANT =============FIX IT WHEN YOU CAN =============
    // IF the user is loggin in, then use their baandaid as the sessionId
    // If unauthenticated user, use the random #
    // ++++++++++++++++++++++ FIX IT ++++++++++++++++++++++++++++++++++++
    let randomnumber = Math.floor(Math.random() * 9000000000) + 1000000000;
    //let dfsesionid = randomnumber.toString();
    axios({
      method: 'post',
      url: baseUrl + 'query?v=20170712',
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      headers: {
        Authorization: 'Bearer 8752d1067e904b20a5004db0ac84cdd8'
      },
      data: {
        query: question,
        lang: 'en',
        sessionId: randomnumber
      }
    })
      .then(res => {
        // console.log('question: ' + question);
        let answer = res.data.result.fulfillment.speech;
        // console.log('response : ' + answer);
        // console.log('Calling createUIResponse');
        this.createUIResponse(question, answer);
        return true;
      })
      .catch(err => {
        console.log('axios error: ' + err.response.data);
        this.setState({ errors: err.response.data });
        return false;
      });
  }

  createUIResponse(question, answer) {
    var logger = document.getElementById('log');

    let counter = this.state.counter + 1;

    //console.log('Inside createUIResp : name ' + this.props.auth.user.name);
    var name = '';
    if (this.props.auth.isAuthenticated) {
      name = this.props.auth.user.name;
    } else {
      name = 'You';
    }

    logger.innerHTML +=
      '<font size=3 color=#990000> &nbsp;' +
      counter.toString() +
      '. ' +
      name +
      '> ' +
      question +
      '</font><br />' +
      '<img class="logo" src=./baandalogo-2.png alt=logo > ' +
      '<font size=4 color=#4286f4><strong> : ' +
      answer +
      '</strong></font><br /><br />';

    logger.scrollTop = logger.scrollHeight;

    this.setThisState(question, answer);
    return true;
  }

  setThisState(question, answer) {
    let resp =
      '<' +
      this.state.counter.toString() +
      ' Q: ' +
      question +
      ' |A:' +
      answer +
      '>';

    // setState
    this.setState({
      start: false,
      question: question,
      counter: this.state.counter + 1,
      answer: answer,
      response: [...this.state.response, resp]
    });

    return true;
  }

  render() {
    //const { errors } = this.state;
    let SXContext = '';

    if (this.state.defaultSXInfo) {
      SXContext = (
        <div className="fixedsize">
          <div className="workarea-padding">
            <div className="pictures">
              <img
                src={serviceExchangeInfo}
                width="100%"
                height="100%"
                alt="..."
              />
            </div>
          </div>
        </div>
      );
    }

    if (this.state.councilorSX) {
      SXContext = (
        <div className="workarea-padding">
          <div className="shadow-lg border-dark">
            <div
              id="log"
              className="border border-dark rounded demofixedsize"
            />
          </div>
          <div className="w-100" />
          <form noValidate onSubmit={this.onSubmit}>
            <div className="form-group">
              <input
                className="form-control form-control-sm"
                placeholder="Ask something in small sentenses please :)"
                name="question"
                type="text"
                ref={this.input}
                value={this.state.questionvalue}
                onChange={this.onChange}
              />
              <div className="btn-group d-flex " role="group" aria-label="...">
                <button
                  className="btn btn-primary w-75"
                  onClick={this.onSubmit}
                >
                  Submit - Type your ask first
                </button>
                &nbsp;
                <button className="btn btn-info w-25" disabled="disabled">
                  <i className="fa fa-microphone" /> &nbsp; TBD
                </button>
              </div>
              {/*<input type="submit" className="btn btn-info btn-block mt-4" /> */}
            </div>
          </form>
        </div>
      );
    }

    if (this.state.createManageProfile) {
      SXContext = (
        <div className="fixedsize">
          <div className="workarea-padding">
            <div className="pictures">
              <img src={profileMgmt} width="100%" height="100%" alt="..." />
            </div>
          </div>
        </div>
      );
    }

    if (this.state.postRequestOrOffergins) {
      SXContext = (
        <div className="fixedsize">
          <div className="workarea-padding">
            <div className="pictures">
              <img src={serviceMgmt} width="100%" height="100%" alt="..." />
            </div>
          </div>
        </div>
      );
    }

    if (this.state.cooperationRequestSearch) {
      SXContext = (
        <div className="fixedsize">
          <div className="workarea-padding">
            <div className="pictures">
              <img src={SXcooperation} width="100" height="650" alt="..." />
            </div>
          </div>
        </div>
      );
    }

    if (this.state.yourDashboard) {
      SXContext = (
        <div className="fixedsize">
          <div className="workarea-padding">
            <div className="pictures">
              <img src={sxDashboard} width="100" height="650" alt="..." />
            </div>
          </div>
        </div>
      );
    }

    if (this.state.serviceXchangeMitigates) {
      SXContext = (
        <div className="fixedsize">
          <div className="workarea-padding">
            <div className="pictures">
              <img src={Issues} width="100%" height="100%" alt="..." />
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="library">
        <p className="top-padding" />
        <div className="container">
          <p className="top-padding-workarea" />
          <h4 className="display-5 text-center">
            <b>Service Xchange</b>
          </h4>
          <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="demobuttons">
                <button
                  className="btn btn-lg btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      defaultSXInfo: true,
                      councilorSX: false,
                      createManageProfile: false,
                      postRequestOrOffergins: false,
                      cooperationRequestSearch: false,
                      yourDashboard: false,
                      serviceXchangeMitigates: false
                    }));
                  }}
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Overview of Service Xchange."
                >
                  About SX
                </button>
              </div>
              <div className="demobuttons">
                <button
                  className="btn btn-lg btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      defaultSXInfo: false,
                      councilorSX: true,
                      createManageProfile: false,
                      postRequestOrOffergins: false,
                      cooperationRequestSearch: false,
                      yourDashboard: false,
                      serviceXchangeMitigates: false
                    }));
                  }}
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Service Xchange councilor and guide."
                >
                  SX Cousellor
                </button>
              </div>
              <div className="demobuttons">
                <button
                  className="btn btn-lg btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      defaultSXInfo: false,
                      councilorSX: false,
                      createManageProfile: true,
                      postRequestOrOffergins: false,
                      cooperationRequestSearch: false,
                      yourDashboard: false,
                      serviceXchangeMitigates: false
                    }));
                  }}
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Please create and  manage your profile."
                >
                  Profile Mgmt.
                </button>
              </div>
              <div className="demobuttons">
                <button
                  className="btn btn-lg btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      defaultSXInfo: false,
                      councilorSX: false,
                      createManageProfile: false,
                      postRequestOrOffergins: true,
                      cooperationRequestSearch: false,
                      yourDashboard: false,
                      serviceXchangeMitigates: false
                    }));
                  }}
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Service operations - manage services."
                >
                  Service Mgmt.
                </button>
              </div>
              <div className="demobuttons">
                <button
                  className="btn btn-lg btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      defaultSXInfo: false,
                      councilorSX: false,
                      createManageProfile: false,
                      postRequestOrOffergins: false,
                      cooperationRequestSearch: true,
                      yourDashboard: false,
                      serviceXchangeMitigates: false
                    }));
                  }}
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Search, manage, matches cooperation process."
                >
                  Cooperation
                </button>
              </div>
              <div className="demobuttons">
                <button
                  className="btn btn-lg btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      defaultSXInfo: false,
                      councilorSX: false,
                      createManageProfile: false,
                      postRequestOrOffergins: false,
                      cooperationRequestSearch: false,
                      yourDashboard: true,
                      serviceXchangeMitigates: false
                    }));
                  }}
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Your SX Dashboard."
                >
                  Dashboard
                </button>
              </div>
              <div className="demobuttons">
                <button
                  className="btn btn-lg btn-outline-info btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      defaultSXInfo: false,
                      councilorSX: false,
                      createManageProfile: false,
                      postRequestOrOffergins: false,
                      cooperationRequestSearch: false,
                      yourDashboard: false,
                      serviceXchangeMitigates: true
                    }));
                  }}
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Engage in service exchange process."
                >
                  SX Mitigates
                </button>
              </div>
            </div>
            <div className="col-lg-10 col-md-8 col-sm-6">
              <div>{SXContext}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SXchange.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(SXchange);
