import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

export default class TopNavigation extends React.Component {

  render() {
    return (
      <div className="top-navigation">
        <img className="logo" src="https://d30y9cdsu7xlg0.cloudfront.net/png/190441-200.png" />
        <div className="links">
          <ul>
            <li>
              <Link to="/library">
                Library
              </Link>
            </li>
          </ul>
        </div>
        {this.props.children}
      </div>
    );
  }
};
