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
          
          <h2>Lawnmower Division </h2>
          <Button color="warning" href="https://www.husqvarna.com">Husqvarna</Button>
          <Button href="https://www.briggsandstratton.com">Briggs and Stratton</Button>
          <Button color="danger" href="https://engines.honda.com/">Honda Small Engine's</Button>
          <Button color="danger" href="https://www.troybilt.com">Troy Bilt</Button>
          <Button color="success" href="https://www.deere.com">John Deere</Button>
          <Button color="warning" href="https://www.ariens.com">Ariens</Button>
          <Button color="primary" href="https://www.sears.com">Sears</Button>
        
        </header>
      </div>
    );
  }
}

export default LawnmowerPage;
