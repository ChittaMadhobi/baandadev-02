import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
  render() {
    return (
      <div>
        <StripeCheckout
          name="Baanda Dev"
          description="$5 for 5 (EIR) Baanda Token"
          amount={500}
          token={token => console.log('token :' + JSON.stringify(token))}
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
        >
          <button className="btn btn-info btn-sm top-padding">
            {' '}
            Add Credits
          </button>
        </StripeCheckout>
      </div>
    );
  }
}

export default Payments;
