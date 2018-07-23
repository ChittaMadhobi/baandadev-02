import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER } from './types';

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post('/api/users/register', userData)
    .then(res => history.push('/login'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login - Get User Token
export const loginUser = userData => dispatch => {
  axios
    .post('/api/users/login', userData)
    .then(res => {
      // Save to localStorage
      const { token } = res.data;
      // Set token to ls
      localStorage.setItem('jwtToken', token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Google Oauth
export const googleLoginUser = () => dispatch => {
  console.log('Inside  googleLoginUser');
  // axios
  //   .get({
  //     method: 'get',
  //     url: '/api/users/google',
  //     contentType: 'application/json; charset=utf-8',
  //     dataType: 'json'
  //   })
  //   .then(res => console.log('res:' + JSON.stringify(res.data)))
  //   .catch(err => console.log('err: ' + err.response.data));
  axios
    .get('/api/users/google')
    .then(res => console.log('res:' + JSON.stringify(res.data)))
    .catch(err => console.log('err: ' + JSON.stringify(err.response)));
};

// Set logged in users
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove the token from localstorage
  localStorage.removeItem('jwtToken');
  // Remove the auth header for future request
  setAuthToken(false);
  // set thecurrent user to {} which will set isAuthenticated  to fales
  dispatch(setCurrentUser({}));
};
