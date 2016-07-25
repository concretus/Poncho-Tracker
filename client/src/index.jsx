import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { Router, Route, Link, browserHistory } from 'react-router'

import appReducer from './reducers/appReducer.jsx';
import App from './components/app.jsx';
import About from './components/about.jsx';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
let store = createStoreWithMiddleware(appReducer);



ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
      <Route path="about" component={About} />
    </Router>
  </Provider>,
  document.getElementById('app')
);