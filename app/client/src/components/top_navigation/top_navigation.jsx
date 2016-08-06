import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

require('./top_navigation.less')

export default class TopNavigation extends React.Component {

  render() {
    return (
      <div className="top-navigation">
        <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/190441-200.png" height="30" width="30" />
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
