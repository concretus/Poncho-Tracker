import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

export default class Navigation extends React.Component {

  render() {
    return (
      <div className="navigation-bar">
        Find
        This is the top navigation bar
        <ul>
          <li><Link to="/about">About</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
};
