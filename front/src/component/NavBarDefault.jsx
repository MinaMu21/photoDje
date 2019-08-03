import React, { Component } from 'react';
import {
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
  DropdownItem
} from 'reactstrap';

import './NavBarDefault.css';

class NavBarDefault extends Component {
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
      <div className="navbarContainer">
        <Navbar color="light" light expand="md" className="navbarGlobal">
          <NavbarBrand href="/">
            <h1 className="brand">
              <a href="/">
                <span className="titleBlack">Photo</span>
                <span>D</span>
                <span className="titleBlack">jé</span>
              </a>
            </h1>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <div class="overlay"></div>
          <Collapse isOpen={this.state.isOpen} navbar className="collapse">
            <Nav className="ml-auto navSection" navbar>
              <NavItem className="nav-item active">
                <NavLink className="nav-link" href="/home"><span className="titlesectionRed">Home</span></NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="nav-item dropdown">
                  <span className="titlesection">Portfolio</span>
                  <DropdownMenu right className="">
                    <DropdownItem>
                      <a class="dropdown-item" href="/theme1"><span className="titlesection">Theme 1</span></a>
                    </DropdownItem>
                    <DropdownItem>
                      <a class="dropdown-item" href="/theme2"><span className="titlesection">Theme 2</span></a>
                    </DropdownItem>
                    <DropdownItem>
                      <a class="dropdown-item" href="/theme3"><span className="titlesection">Theme 3</span></a>
                    </DropdownItem>
                  </DropdownMenu>
                </DropdownToggle>
              </UncontrolledDropdown>

              <NavItem className="nav-item active">
                <NavLink className="nav-link" href="/apropos"><span className="titlesection">A propos de moi...</span></NavLink>
              </NavItem>
              <NavItem className="nav-item active">
                <NavLink className="nav-link" href="/contact"><span className="titlesection">Me contacter</span></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar >
      </div>

    );
  }
}
export default NavBarDefault;