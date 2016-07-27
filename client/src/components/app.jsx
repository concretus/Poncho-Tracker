import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'

export default class App extends React.Component {

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
};