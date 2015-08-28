import React from 'react';
import AMUIReact from 'amazeui-react';
import { Link } from 'react-router';

var Nav = AMUIReact.Nav;
var NavItem = AMUIReact.NavItem;
var Topbar = AMUIReact.Topbar;
var CollapsibleNav = AMUIReact.CollapsibleNav;

export default class Header extends React.Component {
  render() {
    return (
      <Topbar brand="xxx系统" toggleNavKey="nav">
        <CollapsibleNav eventKey="nav">
          <Nav topbar>
            <li><Link to="/app/index" activeClassName="am-active">Index</Link></li>
            <li><Link to="/app/about" activeClassName="am-active">About</Link></li>
          </Nav>
        </CollapsibleNav>
      </Topbar>
    )
  }
}
