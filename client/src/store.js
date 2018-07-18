import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // Since our rootReducer is index.js, we  do not need to mention that explicitly

const initialState = {};
const middleware = [thunk];

// createStore takes in 1. Reducer function (it will be root reducer here)
// 2. Proloaded state (empty array here) & enhancers (Middleware)
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // Check if the next thig works
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

export default store;
