import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { Provider } from 'react-redux'; // Provides the app with a store. This wraps around everything (as below)
import store from './store';

import Navbar from './entrance/components/layout/Navbar';
import Footer from './entrance/components/layout/Footer';
import Landing from './entrance/components/layout/Landing';
import Lobby from './entrance/components/layout/Lobby';

import Login from './entrance/components/auth/Login';
import Register from './entrance/components/auth/Register';
import BaandaLibrary from './librarian/components/BaandaLibrary';
import ServiceExchange from './servicexchange/components/SXchange';
import HealthCare from './healthcare/components/HealthCare';
import BaandaReception from './entrance/components/reception/BaandaReception';
import Finance from './fintech/components/Finance';
import Nook from './nook/components/Nook';
import Blockchain from './blockchain/components/BlockchainServices';
import Cooperation from './cooperation/components/CooperativeLife';
import Marketing from './marketing/components/Marketing';

import './App.css';

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // logout the user
    store.dispatch(logoutUser());
    // TODO: clear current profile
    // Redirect to login
    window.location.href = '/login';
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/lobby" component={Lobby} />
              <Route exact path="/baandalibrary" component={BaandaLibrary} />
              <Route exact path="/servicexchange" component={ServiceExchange} />
              <Route exact path="/healthcare" component={HealthCare} />
              <Route exact path="/finance" component={Finance} />
              <Route exact path="/nook" component={Nook} />
              <Route exact path="/blockchain" component={Blockchain} />
              <Route exact path="/cooperation" component={Cooperation} />
              <Route exact path="/marketing" component={Marketing} />
              <Route
                exact
                path="/baandaReception"
                component={BaandaReception}
              />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
