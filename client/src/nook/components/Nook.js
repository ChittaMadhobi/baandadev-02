import React, { Component } from 'react';

import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import dailyStuff from '../img/nook-task-UI.png';
import socialCircle from '../img/RelationshipModel.png';
import innerJourney from '../img/innerJourney.png';
import yourDreams from '../img/NookDreams.png';

class Nook extends Component {
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
      nookChatbutton: false,
      defaultNookInformation: true,
      ExploreyourSelfwithBaanda: false,
      ChoresJournalsLifestuff: false,
      YourDynamicSocialCircles: false,
      PursuingYourDreams: false
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
        this.setState({ errors: err.response.data });
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
    let nookMainFunctionalPanel;

    if (this.state.nookChatbutton) {
      console.log('inside chatbutton');
      nookMainFunctionalPanel = (
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

    if (this.state.defaultNookInformation) {
      nookMainFunctionalPanel = (
        <div className="fixedsize">
          <div className="workarea-padding">
            <p className="text-center">
              <h4>Nook Concept Overview</h4>
            </p>
            <p>
              One’s nook is one’s private place. It is Baanda’s pledge that,
              unless explicitly requested by you, none of your nook’s
              information will be shared in any form or shape.{' '}
            </p>

            <p>
              When Baanda matures and learns the psychologists traits (engineers
              are working on it – they have white papers on this), Baanda will
              talk to you to identify multilayer persona that you are. That’s
              the starting point of knowing you. Baanda would be like your new
              friend who is trying to know you intensely in the beginning.{' '}
            </p>

            <p>
              Subsequently, Baanda would be your counselor and friend, learn
              about you and your life’s events and continue the process.{' '}
            </p>

            <p>
              In short term, Baanda will enable doing all your online chores and
              tasks (e.g. paying bills, reminded of stuff you have to do,
              setting up emergency alerts etc.).{' '}
            </p>

            <p>
              Baanda will also let you maintain a dynamic relation with your
              immediate friends and family. The number of your friends is not
              important for Baanda for nothing will be advertised or market. The
              quality of relation with the context of relation and intensity at
              a point of time is of Baanda’s interest. Baanda will use that
              intelligence to facilitate you to introspect, improve and assist
              you in togetherness. Baanda is aware that one’s social and family
              circle is dynamic.{' '}
            </p>

            <p>
              You can also store your documents and other important digital
              assets in your nook as a reference point and safe keeping.{' '}
            </p>

            <p>
              Once again, Baanda may use your intelligence, your perception of
              life but will never your information. That is, as an example,
              suppose you (Ms. X) like a Movie. Baanda will never share that
              information unless you want Baanda to with specific someone in
              your social circle. However, Baanda would say, the Movie is liked
              by a person, a young woman from. The identity would be blocked
              mathematically.{' '}
            </p>

            <p>
              Once a system is put in place, even Baanda would not possesses
              your memory but will not be lost to you. That is, Baanda, like
              your friend would know your state like a very close friend.
              However, your memory would be encrypted and stored, with the only
              key that you have. If you lose your key, the memory of your life’s
              activity would be lost. Baanda is contemplating on second layer
              assistance for you to retrieve the key but the process is not
              finalized yet.{' '}
            </p>
          </div>
        </div>
      );
    }

    if (this.state.ExploreyourSelfwithBaanda) {
      nookMainFunctionalPanel = (
        <div className="fixedsize">
          <div className="workarea-padding">
            <div className="pictures">
              <img src={innerJourney} width="100%" height="100%" alt="..." />
            </div>
          </div>
        </div>
      );
    }

    if (this.state.ChoresJournalsLifestuff) {
      nookMainFunctionalPanel = (
        <div className="fixedsize">
          <div className="workarea-padding">
            <div className="pictures">
              <img src={dailyStuff} width="100%" height="100%" alt="..." />
            </div>
          </div>
        </div>
      );
    }

    if (this.state.YourDynamicSocialCircles) {
      nookMainFunctionalPanel = (
        <div className="fixedsize">
          <div className="workarea-padding">
            <div className="pictures">
              <img src={socialCircle} width="100%" height="100%" alt="..." />
            </div>
          </div>
        </div>
      );
    }

    if (this.state.PursuingYourDreams) {
      nookMainFunctionalPanel = (
        <div className="fixedsize">
          <div className="workarea-padding">
            <div className="pictures">
              <img src={yourDreams} width="100%" height="100%" alt="..." />
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
          <h4 className="display-5 text-center">Your Nook in the Internet</h4>
          <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="demobuttons">
                <button
                  className="btn btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      nookChatbutton: false,
                      defaultNookInformation: true,
                      ExploreyourSelfwithBaanda: false,
                      ChoresJournalsLifestuff: false,
                      YourDynamicSocialCircles: false,
                      PursuingYourDreams: false
                    }));
                  }}
                >
                  About Nook
                </button>
              </div>

              <div className="demobuttons">
                <button
                  className="btn btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      nookChatbutton: true,
                      defaultNookInformation: false,
                      ExploreyourSelfwithBaanda: false,
                      ChoresJournalsLifestuff: false,
                      YourDynamicSocialCircles: false,
                      PursuingYourDreams: false
                    }));
                  }}
                >
                  Counselor
                </button>
              </div>
              <div className="demobuttons">
                <button
                  className="btn btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      nookChatbutton: false,
                      defaultNookInformation: false,
                      ExploreyourSelfwithBaanda: true,
                      ChoresJournalsLifestuff: false,
                      YourDynamicSocialCircles: false,
                      PursuingYourDreams: false
                    }));
                  }}
                >
                  Inner Journey
                </button>
              </div>
              <div className="demobuttons">
                <button
                  className="btn btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      nookChatbutton: false,
                      defaultNookInformation: false,
                      ExploreyourSelfwithBaanda: false,
                      ChoresJournalsLifestuff: true,
                      YourDynamicSocialCircles: false,
                      PursuingYourDreams: false
                    }));
                  }}
                >
                  Your chores
                </button>
              </div>
              <div className="demobuttons">
                <button
                  className="btn btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      nookChatbutton: false,
                      defaultNookInformation: false,
                      ExploreyourSelfwithBaanda: false,
                      ChoresJournalsLifestuff: false,
                      YourDynamicSocialCircles: true,
                      PursuingYourDreams: false
                    }));
                  }}
                >
                  Social Circle
                </button>
              </div>
              <div className="demobuttons">
                <button
                  className="btn btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      nookChatbutton: false,
                      defaultNookInformation: false,
                      ExploreyourSelfwithBaanda: false,
                      ChoresJournalsLifestuff: false,
                      YourDynamicSocialCircles: false,
                      PursuingYourDreams: true
                    }));
                  }}
                >
                  Your Dreams
                </button>
              </div>
            </div>
            <div className="col-lg-10 col-md-8 col-sm-6">
              {nookMainFunctionalPanel}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Nook.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(Nook);
