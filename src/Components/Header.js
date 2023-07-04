import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavbarBrand, NavItem, Collapse, NavbarToggler } from 'reactstrap';

// import bpLogo from '../img/bpLogo.png';

import instagram from '../img/insta-icon.png';
import facebook from '../img/facebook-icon.png';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen:false,
    }
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div style={{'width': '100%'}}>
      <Navbar className="navbar" expand="md">
       <NavbarBrand className="beerplace-brand-nav" href="/">BeerPlace</NavbarBrand>
       <NavbarToggler onClick={this.toggle.bind(this)} />
       <Collapse isOpen={this.state.isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Link className="my-nav-link" to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link className="my-nav-link" to="/events">Events</Link>
          </NavItem>
          <NavItem>
            <Link className="my-nav-link" to="/contact">Contact</Link>
          </NavItem>
          <NavItem>
            <div className="my-nav-link"><a href=""><img src={instagram} alt={''} className="instagram icon-sm"/></a></div>
          </NavItem>
          <NavItem>
            <div className="my-nav-link"><a href=""><img src={facebook} alt={''} className="facebook icon-md"/></a></div>
          </NavItem>
        </Nav>
        </Collapse>
      </Navbar>
      </div>
    );
  } 
}