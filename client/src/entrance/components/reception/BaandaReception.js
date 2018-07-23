import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class BaandaLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: false,
      name: '',
      counter: 0,
      question: '',
      answer: '',
      response: ['Hello. I am Baanda. How can I assist?'],
      errors: {}
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
    console.log('onSubmit Q1:' + qq);
    console.log('onSubmit Q2:' + this.state.questionvalue);

    //this.getDFResponse(this.state.question);
    this.getDFResponse(qq);

    this.input.current.value = '';

    console.log('completed librarian onSubmit');
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

        this.createUIResponse(question, answer);
        return true;
      })
      .catch(err => {
        console.log('axios error: ' + err.response.data);
        this.setData({ errors: err.response.data });
        return false;
      });
    return true;
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
    const { isAuthenticated, user } = this.props.auth;
    if (!isAuthenticated && this.state.start) {
      console.log('In render user.name: ' + user.name);
      return <Redirect to="/" />;
    }

    return (
      <div className="baandalibrary">
        <p className="top-padding" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">The Reception</h1>
              <p className="lead text-center">Chat with Baanda </p>
              <div className="shadow-lg border-dark">
                <div
                  id="log"
                  className="border border-dark rounded fixedsize "
                />
              </div>
              <div className="w-100" />

              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    className="form-control form-control-sm"
                    placeholder="Say something please :)"
                    name="question"
                    type="text"
                    ref={this.input}
                    value={this.state.questionvalue}
                    onChange={this.onChange}
                  />

                  <input
                    type="submit"
                    className="btn btn-info  btn-block mt-4 "
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

BaandaLibrary.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(BaandaLibrary);
