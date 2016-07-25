import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { Router, Route, Link } from 'react-router'
import { browserHistory } from 'react-router'
import appReducer from './reducers/appReducer.jsx';

import App from './components/app.jsx';
// import Layout from '.components/Layout/layout.jsx';
import MainBody from './components/Layout/main_body.jsx';
import About from './components/about.jsx';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
let store = createStoreWithMiddleware(appReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={App}>
        <Route path="/" component={MainBody}>
          <Route path="about" component={About}></Route>
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);