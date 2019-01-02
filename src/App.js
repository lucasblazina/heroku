import React, { Component } from 'react';
import logo from './pic.jpg';
import './App.css';

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

import HomePage from './pages/HomePage';
import DeliveryPage from './pages/DeliveryPage';
import LawnmowerPage from './pages/LawnmowerPage';


import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
class App extends Component {

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
      
      <Router>
        <div>
          
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Jacob and Lucas's App</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://crossroadsmotors.us">Crossroads Homepage</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Button color="primary" href="/">Home Page</Button>
                  </DropdownItem>
                  <DropdownItem>
                    <Button color="primary" href="/delivery">Delivery Page</Button>
                  </DropdownItem>

                  <DropdownItem divider />
                  <DropdownItem>
                    <Button color="primary" href="lawnmower">Lawnmower Division</Button>

                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/delivery" component={DeliveryPage} />
            <Route exact path="/lawnmower" component={LawnmowerPage} />
          </Switch>
          
        </div>
      </Router>
    );
  }
}

export default App;
