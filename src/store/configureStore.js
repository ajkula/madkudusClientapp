import {
  createStore,
  compose,
  applyMiddleware }       from 'redux';
import rootReducer        from '../Modules';
import thunk              from 'redux-thunk';

// import {middleware as analyticsMiddleware} from 'utils/analytics';

const middlewares = [
  thunk,
  // analyticsMiddleware,
];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;
