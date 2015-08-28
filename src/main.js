
import 'babel-core/polyfill';
import React from 'react';
import { Router, Route, Redirect } from 'react-router';
import { history } from 'react-router/lib/HashHistory';

import App from './components/app'

import Header from './components/app/header'

import Index from './components/app/index'
import About from './components/app/about'
import Message from './components/app/message'

import './assets/styles/amazeui.min.css';

React.render((
  <Router history={history}>
    <Route path="/app" component={App}>
      <Route path="about" components={{header: Header, main: About}}/>
      <Route path="index" components={{header: Header, main: Index}}>
        <Route path="messages/:id" components={{header: Header, main: Message}}/>
      </Route>
    </Route>
    <Redirect from="/" to="/app/index" />
  </Router>
), document.body);

