import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
//import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
  async callStripeAPI(token) {
    console.log('Reached this.callStripeAPI');
    //console.log('token id:' + token.id);
    console.log('baandaId: ' + this.props.auth.user.baandaid);
    // axios
    //   .post('/api/finance/stripe', token)
    //   .then(res => console.log('res : ' + res.data))
    //   .catch(err => console.log('err : ' + err.response));

    // In action handler call ... we would do the following in
    // const res = await axios.post('/api/finance/stripe', token);
    // dispatch({ type: FETCH_USER, payload: res.data});

    // Should call the axios call in action handles (financeActions.js)
  }
  render() {
    return (
      <div>
        <StripeCheckout
          name="Baanda Dev"
          description="$7 for 5 (EIR) Baanda Token"
          amount={700}
          token={token => {
            console.log('token :' + JSON.stringify(token));
            this.callStripeAPI(token);
          }}
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
        >
          <button className="btn btn-info btn-sm top-padding">
            {' '}
            Pay Via CC
          </button>
        </StripeCheckout>
      </div>
    );
  }
}

Payments.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Payments);

//export default Payments;
