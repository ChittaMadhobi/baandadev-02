import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

class HealthCareEntrance extends Component {
  constructor() {
    super();
    this.state = {
      defaultSXInfo: true,
      createManageProfile: false,
      postRequestOrOffergins: false,
      cooperationRequestSearch: false,
      engagementOpSManagement: false,
      serviceXchangeMitigates: false
    };
  }

  render() {
    let sxContextInfo;

    if (this.state.defaultSXInfo) {
      sxContextInfo = (
        <div className="demosmallfont">
          <p class="h3 text-center">
            <b>Baanda HealthCare Concepts</b>
          </p>
          <p>
            Due to active and funded endeavors of allopathic ways and means of
            medical practices in 19th and 20th century, with trillion-dollar
            industry around is, healthcare has almost become synonymous to
            ‘treating a human like a machine’ and deals with standard hospitals
            and health insurance companies of today.
          </p>
          <p>
            However, such healthcare is not only incomplete or not affordable by
            vast majority of the people around the world, there are various
            other kinds of health care alternatives available to humanity. Due
            to lack of investments in other avenues of healthcare around
            research and development, education, to advocation of alternative
            healthcare as hoax or non-science, humanity has become imprisoned to
            a single path to healthcare.
          </p>
          <p>
            Baanda intends to facilitate individual with contextual healthcare
            support with reference to one’s life-contexts. Furthermore, Baanda
            would advocate greater awareness, possibilities, R&D cooperation
            among practitioners and so on. Baanda does not discredit allopathic
            practices and regards it highly. However, it does not intend to
            discredit other avenues such as homeopathy, ayurvedic, herbology,
            acupuncture, and various other ways and means.
          </p>
          <p>
            Baanda considers an individual to be a dynamic composition of mind,
            body, and interconnectedness (spirit) with one’s ecosystem as root
            of one’s health. Baanda intends to assimilate collective human
            knowledge and imagination to make not only an individual healthy but
            to make this planet healthy as a consequence.
          </p>
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

    if (this.state.createManageProfile) {
      sxContextInfo = (
        <div>
          <p class="h3 text-center">
            <b>Create Your Health Profile</b>
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

    if (this.state.postRequestOrOffergins) {
      sxContextInfo = (
        <div>
          <p class="h3 text-center">
            <b>Contextually Available Healthcare</b>
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

    if (this.state.cooperationRequestSearch) {
      sxContextInfo = (
        <div>
          <p class="h3 text-center">
            <b>R&D of Alternative Medicine</b>
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

    if (this.state.engagementOpSManagement) {
      sxContextInfo = (
        <div>
          <p class="h3 text-center">
            <b>Support Group Co-op Formation</b>
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

    if (this.state.serviceXchangeMitigates) {
      sxContextInfo = (
        <div>
          <p className="h3 text-center">
            <b>Issues Mitigated via Baanda HealtCare</b>
          </p>
          <div className="row">
            <div className="col demosmallfont">
              <p>
                <b>HealthCare Provider Issues:</b>
              </p>
              <ul>
                <li>
                  We can list all kinds of issues that a HealthCare provider
                  faces including traditional doctors in increasilgy expensive
                  domain.
                </li>
              </ul>
            </div>
            <div className="col demosmallfont">
              <p>
                <b>Health & Wellbing Issues:</b>
              </p>
              <ul>
                <li>
                  {' '}
                  Here we highlight some of the global and local healthcare
                  desperations that Baanda would address
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="sxchange">
        <p className="top-padding" />
        <div className="container">
          <h1 className="display-4 text-center">
            <bold>Baanda HealthCare Services</bold>
          </h1>
          <p className="top-padding" />
          <div className="row demorow">
            <div className="col-md-4 col-sm-6 democolleft">
              <p className="lead text-center">Chat about your HealthCare </p>
              <div className="shadow-lg border-dark">
                <div
                  id="demochat"
                  className="border border-dark rounded demofixedsize text-center"
                >
                  <h6>
                    <font color="red">
                      <b>Context: HealthCare </b>
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
              <div className="demobuttons">
                <button
                  className="btn btn-lg btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      defaultSXInfo: false,
                      createManageProfile: true,
                      postRequestOrOffergins: false,
                      cooperationRequestSearch: false,
                      engagementOpSManagement: false,
                      serviceXchangeMitigates: false
                    }));
                  }}
                >
                  Create your health profile
                </button>
              </div>
              <div className="demobuttons">
                <button
                  className="btn btn-lg btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      defaultSXInfo: false,
                      createManageProfile: false,
                      postRequestOrOffergins: true,
                      cooperationRequestSearch: false,
                      engagementOpSManagement: false,
                      serviceXchangeMitigates: false
                    }));
                  }}
                >
                  Contextually Available HealthCare
                </button>
              </div>
              <div className="demobuttons">
                <button
                  className="btn btn-lg btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      defaultSXInfo: false,
                      createManageProfile: false,
                      postRequestOrOffergins: false,
                      cooperationRequestSearch: true,
                      engagementOpSManagement: false,
                      serviceXchangeMitigates: false
                    }));
                  }}
                >
                  R&D of alternative medicine
                </button>
              </div>
              <div className="demobuttons">
                <button
                  className="btn btn-lg btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      defaultSXInfo: false,
                      createManageProfile: false,
                      postRequestOrOffergins: false,
                      cooperationRequestSearch: false,
                      engagementOpSManagement: true,
                      serviceXchangeMitigates: false
                    }));
                  }}
                >
                  Support Group (co-op) Formation
                </button>
              </div>
              <div className="demobuttons">
                <button
                  className="btn btn-lg btn-outline-danger btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      defaultSXInfo: false,
                      createManageProfile: false,
                      postRequestOrOffergins: false,
                      cooperationRequestSearch: false,
                      engagementOpSManagement: false,
                      serviceXchangeMitigates: true
                    }));
                  }}
                >
                  HC Issues Baanda Addresses
                </button>
              </div>
            </div>
            <div className="col-md-8 col-sm-6 democolright shadow-lg rounded">
              {sxContextInfo}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HealthCareEntrance;
