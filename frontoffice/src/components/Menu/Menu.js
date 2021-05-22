import React from "react";

import { Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';


class Menu extends React.Component {
  render() {
    console.log('render Menu');
    return (
        <Nav tabs>
          <NavItem>
            <NavLink to="/personal-data" tag={RRNavLink}>Personal data</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/eth-address" tag={RRNavLink}>ETH address</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/eth-thx" tag={RRNavLink}>ETH thx</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Another link</NavLink>
          </NavItem>
        </Nav>
    );
  }
}

export {Menu};
