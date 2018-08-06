import React, { Component } from 'react';

import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import hcInfo from '../img/hcInfo.png';
import hcAlternate from '../img/hcAlternative.png';
import hcTogether from '../img/hcTogetherness.png';
import hcInsure from '../img/hcInsurance.png';

class HealthCare extends Component {
  constructor() {
    super();
    this.state = {
      start: false,
      name: '',
      counter: 0,
      question: '',
      answer: '',
      response: ['Hello. I am Baanda. How can I assist?'],
      errors: {},
      hcChat: false,
      hcInformation: true,
      hcAlternatives: false,
      hcInsurace: false,
      hcTogetherness: false
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

    this.getDFResponse(qq);

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
        this.setData({ errors: err.response.data });
        return false;
      });
  }

  createUIResponse(question, answer) {
    var logger = document.getElementById('log');

    let counter = this.state.counter + 1;

    //console.log('Inside createUIResp : name ' + this.props.auth.user.name);
    var name = 'xxx';
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
    let hcPanel;

    if (this.state.hcChat) {
      console.log('inside chatbutton');
      hcPanel = (
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

    if (this.state.hcInformation) {
      hcPanel = (
        <div className="fixedsize">
          <div className="workarea-padding">
            <div className="pictures">
              <img src={hcInfo} width="100%" height="100%" alt="..." />
            </div>
          </div>
        </div>
      );
    }

    if (this.state.hcAlternatives) {
      hcPanel = (
        <div className="fixedsize">
          <div className="workarea-padding">
            <div className="pictures">
              <img src={hcAlternate} width="100%" height="100%" alt="..." />
            </div>
          </div>
        </div>
      );
    }

    if (this.state.hcInsurace) {
      hcPanel = (
        <div className="fixedsize">
          <div className="workarea-padding">
            <div className="pictures">
              <img src={hcInsure} width="100%" height="100%" alt="..." />
            </div>
          </div>
        </div>
      );
    }

    if (this.state.hcTogetherness) {
      hcPanel = (
        <div className="fixedsize">
          <div className="workarea-padding">
            <div className="pictures">
              <img src={hcTogether} width="100%" height="100%" alt="..." />
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="nook">
        <p className="top-padding" />
        <div className="container">
          <p className="top-padding-workarea" />
          <h4 className="display-5 text-center">Cooperative HealthCare</h4>
          <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="demobuttons">
                <button
                  className="btn btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      hcChat: false,
                      hcInformation: true,
                      hcAlternatives: false,
                      hcInsurace: false,
                      hcTogetherness: false
                    }));
                  }}
                >
                  HealthCare Info
                </button>
              </div>
              <div className="demobuttons">
                <button
                  className="btn btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      hcChat: true,
                      hcInformation: false,
                      hcAlternatives: false,
                      hcInsurace: false,
                      hcTogetherness: false
                    }));
                  }}
                >
                  Counsellor
                </button>
              </div>

              <div className="demobuttons">
                <button
                  className="btn btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      hcChat: false,
                      hcInformation: false,
                      hcAlternatives: true,
                      hcInsurace: false,
                      hcTogetherness: false
                    }));
                  }}
                >
                  Alternatives
                </button>
              </div>

              <div className="demobuttons">
                <button
                  className="btn btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      hcChat: false,
                      hcInformation: false,
                      hcAlternatives: false,
                      hcInsurace: true,
                      hcTogetherness: false
                    }));
                  }}
                >
                  Insurance
                </button>
              </div>

              <div className="demobuttons">
                <button
                  className="btn btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      hcChat: false,
                      hcInformation: false,
                      hcAlternatives: false,
                      hcInsurace: false,
                      hcTogetherness: true
                    }));
                  }}
                >
                  Togetherness
                </button>
              </div>
            </div>
            <div className="col-lg-10 col-md-8 col-sm-6">{hcPanel}</div>
          </div>
        </div>
      </div>
    );
  }
}

HealthCare.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(HealthCare);
