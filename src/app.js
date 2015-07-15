import React from 'react';
import { Link } from 'react-router';
import { RouteHandler } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App</h1>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/index">Inbox</Link></li>
          </ul>
          <RouteHandler />
        </div>
    )
  }
}
