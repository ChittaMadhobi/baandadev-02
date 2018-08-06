import React, { Component } from 'react';

import Payments from './Payments';

import finInfo from '../img/finInfo.png';
import finStatement from '../img/finStatement.png';

class Finance extends Component {
  constructor() {
    super();
    this.state = {
      financeInfo: true,
      makeCCPayments: false,
      makeCryptoPayments: false,
      accountStatement: false
    };
  }

  render() {
    let finContext;

    if (this.state.financeInfo) {
      finContext = (
        <div className="fixedsize">
          <div className="workarea-padding">
            <div className="pictures">
              <img src={finInfo} width="100%" height="100%" alt="..." />
            </div>
          </div>
        </div>
      );
    }

    if (this.state.makeCCPayments) {
      finContext = (
        <div className="fixedsize">
          <div className="workarea-padding">
            <div className="text-center">
              <p>
                <u> Invoice & Payment </u>
              </p>
            </div>
            <br />
            <table>
              <tr>
                <th>Item Description </th>
                <th>Amount </th>
              </tr>
              <tr>
                <td> [SX Item#:238765] 6 weeks package for HELP-WANTED </td>
                <td> $5.00 </td>
              </tr>
              <tr>
                <td>
                  {' '}
                  [SX Item#:238762] email-propagation to matched parties{' '}
                </td>
                <td> $2.00 </td>
              </tr>
              <tr>
                <td>
                  {' '}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="green">
                    Information: 1 Credit Point = .50 USD{' '}
                  </font>
                </td>
                <td> 14 Credit Point </td>
              </tr>
              <tr>
                <td>
                  {' '}
                  Total credit price in USD [EIR informs equivalent EIR today]
                </td>
                <td> $7.00 [5 EIR]</td>
              </tr>
              <tr>
                <td> Tax </td>
                <td> $0.00 </td>
              </tr>
              <tr>
                <td> Total amount to activate your order </td>
                <td> $7.00 </td>
              </tr>
            </table>
            <Payments /> <br />
            <p>
              <i>
                Note: This is an exemplified Invoice and payment module. The
                'Pay via CC' is connected to Stripe test. If you test with
                number 4242 4242 4242 4242 and future exp date and 3 digits it
                will approve. Any other number will not be approved.
              </i>{' '}
            </p>
            <br />
            <p>Any transaction, if require payment, will be visible here. </p>
          </div>
        </div>
      );
    }

    if (this.state.makeCryptoPayments) {
      finContext = (
        <div className="workarea-padding">
          <p className="text-center h4"> Crypto Payment Panel </p>
          <br />
          <br />
          <p>
            The legalese of cryptopayment in USA is under investigation by
            Baanda legal and business wing. Due to fluctuating and changing
            regulatory processes most Crypto Wallets have discontinued (e.g.
            Stripe OR CoinGate does not support USA etc.). Upon regulatory
            clarification by legalese, an appropriate process would be in place.
            Baanda intends to do business in crypto currency if/where it is
            legal.{' '}
          </p>
        </div>
      );
    }

    if (this.state.accountStatement) {
      finContext = (
        <div className="fixedsize">
          <div className="workarea-padding">
            <div className="pictures">
              <img src={finStatement} width="100%" height="100%" alt="..." />
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
          <h4 className="display-5 text-center">Payments & Accounting</h4>
          <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="demobuttons">
                <button
                  className="btn btn-lg btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      financeInfo: true,
                      makeCCPayments: false,
                      makeCryptoPayments: false,
                      accountStatement: false
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
                      financeInfo: false,
                      makeCCPayments: true,
                      makeCryptoPayments: false,
                      accountStatement: false
                    }));
                  }}
                >
                  Pay with CC
                </button>
              </div>
              <div className="demobuttons">
                <button
                  className="btn btn-lg btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      financeInfo: false,
                      makeCCPayments: true,
                      makeCryptoPayments: true,
                      accountStatement: false
                    }));
                  }}
                >
                  Pay with Crypto
                </button>
              </div>
              <div className="demobuttons">
                <button
                  className="btn btn-lg btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      financeInfo: false,
                      makeCCPayments: false,
                      makeCryptoPayments: false,
                      accountStatement: true
                    }));
                  }}
                >
                  Statement
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

export default Finance;
