import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { Router, Route, Link } from 'react-router'; 
import { browserHistory } from 'react-router';
import appReducer from './reducers/appReducer.jsx';

import App from './components/app.jsx';
import MainLayout from './components/Layout/main_layout.jsx';
import MainBody from './components/Layout/main_body.jsx';
import Library from './components/library.jsx';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
let store = createStoreWithMiddleware(appReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={MainLayout}>
        <Route path="main" component={MainBody} />
        <Route path="library" component={Library} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);