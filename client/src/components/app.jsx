import React from 'react';
import Layout from './Layout/layout.jsx';
import { Router, Route, Link, browserHistory } from 'react-router'

export default class App extends React.Component {
  render() {
    return (
      <div>
        test
        <Link to="about">About</Link>
        {this.props.children}
      </div>
    );
  }
};