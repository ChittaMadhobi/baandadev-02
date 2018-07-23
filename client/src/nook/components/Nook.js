import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

class SXEntrance extends Component {
  constructor() {
    super();
    this.state = {
      nookChatbutton: false,
      defaultNookInformation: true,
      ExploreyourSelfwithBaanda: false,
      ChoresJournalsLifestuff: false,
      YourDynamicSocialCircles: false,
      PursuingYourDreams: false
    };
  }

  render() {
    let nookChat;

    if (!this.state.nookChatbutton) {
      nookChat = <div />;
    } else {
      nookChat = (
        <div>
          <div className="shadow-lg border-dark">
            <div
              id="demochat"
              className="border border-dark rounded demofixedsize text-center"
            >
              <p className="lead text-center">Chat about your Nook </p>
              <h6>
                <font color="red">
                  <b>Context: Your Nook </b>
                  <br />
                  <br /> Contextual interaction has not been activated ...{' '}
                </font>
              </h6>{' '}
            </div>
          </div>
          <form noValidate onSubmit={this.onSubmit}>
            <div className="form-group">
              <input
                className="form-control form-control-sm"
                placeholder="Ask if you like :)"
                name="question"
                type="text"
                value=""
              />
              <div className="demobuttons">
                <input
                  type="submit"
                  value="Click to ask your question"
                  className="btn btn-info  btn-block mt-4 "
                />
              </div>
            </div>
          </form>
        </div>
      );
    }

    let nookMainFunctionalPanel;

    if (this.state.defaultNookInformation) {
      nookMainFunctionalPanel = (
        <div>
          <p class="h3 text-center">
            <b>Your home in cyberspace</b>
          </p>
          <div className="mostly-customized-scrollbar">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at
            mollis diam, sed venenatis ipsum. Donec sed ipsum mollis, facilisis
            magna a, pellentesque neque. Sed ut eleifend nibh. Ut arcu diam,
            imperdiet vitae diam ut, consectetur mattis erat. Vivamus non ex
            magna. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Phasellus metus neque, vehicula a dolor
            eget, dictum mollis nisi. Proin suscipit ullamcorper felis, et
            fermentum enim placerat non. Etiam fringilla libero libero, ut
            volutpat nulla placerat a. Suspendisse ultrices sodales tortor, in
            aliquam orci ultricies nec. Duis blandit dictum nisi sed tincidunt.
            Praesent lacinia lectus lectus. Cras sit amet neque justo. In hac
            habitasse platea dictumst. Aliquam porta eu lectus a aliquam.
            Vestibulum et felis quis lacus fringilla rhoncus. Fusce bibendum a
            ante sed viverra. Vivamus id euismod ex. Donec iaculis turpis metus,
            ut elementum orci bibendum non. Proin non nisi nulla. Sed porta arcu
            et ligula euismod, ac fringilla nisl aliquet. Duis fermentum dui at
            dui cursus, quis dictum odio vulputate. Etiam nec vulputate justo.
            Donec facilisis vulputate metus at congue. In luctus ligula elit,
            non laoreet dui scelerisque sit amet. Aenean lobortis magna nec
            dapibus molestie. In varius tristique sapien at luctus. Aenean id
            commodo arcu. Praesent mollis eu nulla a tincidunt. Maecenas tempus,
            enim in mollis commodo, sapien est finibus nisl, ut blandit purus
            nisl vel diam.
          </div>
        </div>
      );
    }

    if (this.state.ExploreyourSelfwithBaanda) {
      nookMainFunctionalPanel = (
        <div>
          <p class="h3 text-center">
            <b>Speak of your Self</b>
          </p>
          <br />
          <br />

          <br />
          <p class="text-center">
            <font color="blue">
              <b>
                Please click on buttons to know nuances of each sub-section.
              </b>
            </font>
          </p>
        </div>
      );
    }

    if (this.state.ChoresJournalsLifestuff) {
      nookMainFunctionalPanel = (
        <div>
          <p class="h3 text-center">
            <b>Your chores of life and create memory</b>
          </p>
          <br />
          <br />

          <br />
          <br />
          <p class="text-center">
            <font color="blue">
              <b>
                Please click on buttons to know nuances of each sub-section.
              </b>
            </font>
          </p>
        </div>
      );
    }

    if (this.state.YourDynamicSocialCircles) {
      nookMainFunctionalPanel = (
        <div>
          <p class="h3 text-center">
            <b>Let's talk about your friends and family</b>
          </p>
          <br />

          <br />
          <p class="text-center">
            <font color="blue">
              <b>
                Please click on buttons to know nuances of each sub-section.
              </b>
            </font>
          </p>
        </div>
      );
    }

    if (this.state.PursuingYourDreams) {
      nookMainFunctionalPanel = (
        <div>
          <p class="h3 text-center">
            <b>What is your dreams made of</b>
          </p>
          <br />

          <br />
          <p class="text-center">
            <font color="blue">
              <b>
                Please click on buttons to know nuances of each sub-section.
              </b>
            </font>
          </p>
        </div>
      );
    }

    return (
      <div className="sxchange">
        <p className="top-padding" />
        <div className="container bottom-padding">
          <h3 className="display-5 text-center">
            <bold>Your Nook in Internet</bold>
          </h3>
          <p className="top-padding" />
          <div className="row demorow">
            <div className="col-md-4 col-sm-6 democolleft">
              {nookChat}
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
                  Want to talk about your Nook
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
                  Explore your inner Self
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
                  Your chores and life affairs
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
                  Your place in the society
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
                  Pursue your Dreams
                </button>
              </div>
            </div>
            <div className="col-md-8 col-sm-6 democolright shadow-lg rounded bottom-padding">
              {nookMainFunctionalPanel}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SXEntrance;
