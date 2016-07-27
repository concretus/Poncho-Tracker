import React from 'react';
import { Router, Route, Link } from 'react-router'

export default class ListItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      done: false
    };
  }

  render() {
    // update component style based on current state and user interatction.
    return (
      <li key={this.props.id} className="item">
        <Link to="/:document">{this.props.name}</Link>
      </li>
    );
  }
};
