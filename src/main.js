
import 'babel-core/polyfill';
import React from 'react';
import { Router, Route, Link } from 'react-router';
import { history } from 'react-router/lib/HashHistory';

import Index from './routers/index'
import About from './routers/about'

var App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        {/* change the <a>s to <Links>s */}
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/index">Index</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
});

// Finally we render a `Router` component with some `Route`s, it'll do all
// the fancy routing stuff for us.
React.render((
  <Router history={history}>
    <Route path="/" component={App}>
      <Route path="about" component={About}/>
      <Route path="index" component={Index}/>
    </Route>
  </Router>
), document.body);

