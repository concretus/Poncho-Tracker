import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

import TopNavigation from '../top_navigation/top_navigation.jsx'
import ListComponent from '../list/list_component.jsx'

export default class MainLayout extends React.Component {
  render() {
    return (
      <div className="app">
        <TopNavigation />
        <main className="main-body">
          {this.props.children}
        </main>
      </div>
    );
  }
};
