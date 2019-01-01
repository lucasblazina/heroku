import React, { Component } from 'react';
import logo from '../pic2.jpg';

import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class HomePage extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="App">

        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>here is another page :)</h2>
          <Button bsStyle="red">Danger</Button>
          <Button bsSize="large">Large button</Button>
          <Button bsStyle="link">https://amazon.com</Button>
        </header>
      </div>
    );
  }
}

export default HomePage;
