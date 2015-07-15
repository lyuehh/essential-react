
import 'babel-core/polyfill';
import React from 'react';
import { Router, Route, Redirect } from 'react-router';
import { history } from 'react-router/lib/HashHistory';

import App from './components/app'
import Index from './components/app/index'
import About from './components/app/about'
import Message from './components/app/message'

React.render((
  <Router history={history}>
    <Route path="/app" component={App}>
      <Route path="about" component={About}/>
      <Route path="index" component={Index}>
        <Route path="messages/:id" component={Message}/>
      </Route>
    </Route>
    <Redirect from="/" to="/app/index" />
  </Router>
), document.body);

