/**
 * App entry point
 */

import 'babel-core/polyfill';
import React from 'react';
import Router from 'react-router';

import App from './app'
import Index from './routers/index'
import About from './routers/about'

var Route = Router.Route;

var routes = (
  <Route path="/" handler={App}>
    <Route path="about" handler={About}/>
    <Route path="index" handler={Index}/>
  </Route>
);

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root/>, document.body);
});

