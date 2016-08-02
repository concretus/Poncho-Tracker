import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

export default class Library extends React.Component {

  render() {
    return (
      <div className="document-library">
        <table className="document-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Date Created</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>test</td>
              <td>test</td>
              <td>test</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
};
