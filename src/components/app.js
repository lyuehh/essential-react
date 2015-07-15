import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/app/about">About</Link></li>
          <li><Link to="/app/index">Index</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
