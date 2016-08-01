import React from 'react';

import ListItem from './listItem.jsx'

export default class ListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Open"
    };
  }

  render() {
    return (
      <div>
        <h3>{this.state.title}</h3>
        <ul>
          {this.props.list.map((item) => {
            return <ListItem key={item.key} name={item.label}/>
          })}
        </ul>
      </div>
    );
  }
};