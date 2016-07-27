import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

import ListComponent from '../list_component.jsx'

export default class MainLayout extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="top-infobar">
        <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/190441-200.png" height="30" width="30" />
          <Link to="/library">Library</Link>
        </div>
        <aside className="main-sidebar">
          <ListComponent list={[{ key:1, label:'Report 1' }, { key:2, label:'Report 2' }]} />
        </aside>
        <main className="main-body">
          {this.props.children}
        </main>
      </div>
    );
  }
};
