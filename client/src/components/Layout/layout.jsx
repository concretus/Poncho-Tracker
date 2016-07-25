import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import MainBody from './main_body.jsx';
import Navigation from './navigation.jsx';

export default class Layout extends React.Component {

  render() {
    return (
      <div className="app-container">
        <Navigation />
        {this.props.children}
      </div>
    );
  }
};
