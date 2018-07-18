import { GET_ERRORS } from '../actions/types';
const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload; // payload, in this case contain err.response.data from actions

    default:
      return state;
  }
}
