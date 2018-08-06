import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

class SXEntrance extends Component {
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
        <div>
          <p class="h3 text-center">
            <b>Service Exchange Concepts</b>
          </p>
          <br />
          <br />
          <p>
            Life on this planet, which includes humanity, exists via continuous
            exchange of energy and information with its ecosystem. This
            moment-by-moment illusive separateness of individuals in the
            undivided whole is where concept of Baanda has emerged.
          </p>
          <p>
            Baanda is devoted to individualism. Every individual needs to
            exchange services and forged on information exchange. Baanda enables
            information, intelligence, and service exchange, with a focus on an
            individual’s traits and life-contexts to usher in a socio-economy
            for the wellbeing of many.
          </p>
          <p>
            This module focuses on next-generation intelligence driven Service
            Xchange possibilities and is expected to morph and evolve
            progressively based on Baanda learning from its global experience.
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

    if (this.state.createManageProfile) {
      sxContextInfo = (
        <div>
          <p class="h3 text-center">
            <b>Create and Manage your Profile</b>
          </p>
          <br />
          <br />
          <p>
            Anyone in the Service Xchange market would need to have a profile,
            indifferent to whether one is a service requestor or a provider.
          </p>
          <p>
            Profile would be contextual to the domain as well as whether one is
            a service provider or requestor.{' '}
          </p>
          <p>
            It is expected that an average user also has a his/her nook in
            Baanda. Baanda, in congruence with user’s wishes, would consider one
            life-contexts as well as persona contexts to recommend, market,
            and/or advice.
          </p>
          <p>
            One would be able to setup profiles based on point-of-views. Based
            on user’s chose or wish, only one point-of-view of the profile would
            be visible to a viewer. During, posting, the POV would be attached.
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
            <b>Post Service Requests or Offerings</b>
          </p>
          <br />
          <br />
          <p>
            One would be able to post one or ore service request or offerings
            contextually.
          </p>
          <p>
            Context would be based on domain, geo-location, and other associated
            dimensions.
          </p>
          <p>
            Baanda would provide guidance to a user based on one’s life context,
            Baanda’s experience from large number of similar trades in services.
          </p>
          <p>
            Baanda will also observe trends and advocate, adopt, and adapt to
            how posts would be presented (e.g. video, audio, references, and so
            on).
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

    if (this.state.cooperationRequestSearch) {
      sxContextInfo = (
        <div>
          <p class="h3 text-center">
            <b>Cooperation Request and Search</b>
          </p>
          <br />
          <br />
          <p>
            An individual may find a service request that he/she may be able to
            do partially. He she should be able to search and/or post a request
            for cooperation. Baanda would not only be able to search and map
            contextually, it would also be able to assist in setting up
            agreements among them to propose jointly and ways and mean of such
            cooperation-based engagement.
          </p>
          <p>
            There would be difference between project-based cooperation and
            prolonged cooperation that Baanda advocates as an emerging way of
            life. The cooperation here is for a single request to be replied
            jointly.
          </p>
          <p>
            The cooperation-based response is very new and is unique
            facilitation by Baanda. It will be a while before it matures. Baanda
            is cognizant of its newness and has transition plans in place for
            socio-economy to migrate.
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

    if (this.state.engagementOpSManagement) {
      sxContextInfo = (
        <div>
          <p class="h3 text-center">
            <b>Engagement Operations & Management</b>
          </p>
          <br />
          <br />
          <p>
            The evolution of Service Xchange would be achieved on how
            intelligently Baanda facilitates next-generation of service trading.
            This will include day-to-day management, managing one’s performance,
            reputations, and diverse kinds of support.
          </p>
          <p>
            This is not only for managing one’s work but also to facilitate
            security, support, enable supply chain of good and materials as ad
            if needed, consider life-event to evaluate and perpetuate
            reputations, implementations of internal and/or external financing
            (if needed) and so on.
          </p>
          <p>
            Baanda intends to learn continuously and incorporate such learning
            towards globally emerging new frontier of service trading.
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

    if (this.state.serviceXchangeMitigates) {
      sxContextInfo = (
        <div>
          <p className="h3 text-center">
            <b>Issues Mitigated via Service Xchange</b>
          </p>
          <div className="row">
            <div className="col demosmallfont">
              <p>
                <b>Service Offering Issues:</b>
              </p>
              <ul>
                <li>
                  Jack of all trades : Have expertise, market, chase clients,
                  make deals, project mgmt., deliver, finance, … end-to-end.
                </li>
                <li>New clients without prior relation.</li>
                <li>Game of extremes: No work to overloaded</li>
                <li>
                  Social-stigma: Often freelancing is equated to unemployed.
                  This is changing and is replaced by ‘entrepreneur spirit.’
                </li>
                <li>Client’s unrealistic demands and deadlines</li>
                <li>
                  Pay disparity (Cheaper bid wins – no other metric available)
                </li>
                <li>Lack of teammates to discuss, brainstorm, support etc.</li>
                <li>No benefit beyond payment.</li>
                <li>Torturous pay follow up (difficult to get paid)</li>
                <li>Many have difficult to focus in domestic distractions.</li>
              </ul>
            </div>
            <div className="col demosmallfont">
              <p>
                <b>Service Provider Issues:</b>
              </p>
              <ul>
                <li> Have no idea with whom he/she/it is dealing</li>
                <li>Deadlines are often missed</li>
                <li>Poor communication from the freelancers side</li>
                <li>No ownership of the work.</li>
                <li>Different time zones</li>
                <li>Unsure about the freelancer skills</li>
                <li>
                  Many times the freelancer don't understand the work fully and
                  starts working and only after first mockup
                </li>
                <li>
                  Clients figures it out that the skills are not good enough
                </li>
                <li>
                  Legal issues, the freelancer can use/sell the work to someone
                  else too
                </li>
                <li>No work/reporting standards</li>
                <li>Lack of Professionalism - hiring is a gamble.</li>
                <li>
                  The Freelancer may be working as part time meaning not fully
                  committed to the work.{' '}
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
            <bold>The Service Exchange</bold>
          </h1>
          <p className="top-padding" />
          <div className="row demorow">
            <div className="col-md-4 col-sm-6 democolleft">
              <p className="lead text-center">Chat about Service Xchange </p>
              <div className="shadow-lg border-dark">
                <div
                  id="demochat"
                  className="border border-dark rounded demofixedsize text-center"
                >
                  <h6>
                    <font color="red">
                      <b>Context: Service Exchange </b>
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
                  Create & Manage your Profiles
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
                  Post Service Request or Offerings
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
                  Cooperation Request and Search
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
                  Engagement Ops & Management
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
                  SX Issues Baanda Addresses
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

export default SXEntrance;
