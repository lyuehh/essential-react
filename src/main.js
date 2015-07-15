
import 'babel-core/polyfill';
import React from 'react';
import { Router, Route, Link } from 'react-router';
import { history } from 'react-router/lib/HashHistory';

import Index from './routers/index'
import About from './routers/about'
import Message from './routers/message'

var App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/index">Index</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
});

React.render((
  <Router history={history}>
    <Route path="/" component={App}>
      <Route path="about" component={About}/>
      <Route path="index" component={Index}>
        <Route path="messages/:id" component={Message}/>
      </Route>
    </Route>
  </Router>
), document.body);

