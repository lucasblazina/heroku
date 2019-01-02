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

class LawnmowerPage extends Component {

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
          
          <h2>Link Page :)</h2>
          <Button href="www.amazon.com">amazon</Button>
          <Button bsSize="large">Large button</Button>
          <Button bsStyle="link">https://amazon.com</Button>
        </header>
      </div>
    );
  }
}

export default LawnmowerPage;
