import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'

export default class MainBody extends React.Component {

  render() {
    return (
      <div className="main-body">
        This is main body
        {this.props.children}
      </div>
    );
  }
};
