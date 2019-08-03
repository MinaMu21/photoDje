import React, { Component } from 'react';
// import burgerMenuBlack from '../images/burgerMenu_black.png';
import './NavBarDefault.css';

class NavBarDefault extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };

  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,

    });
  }

  render() {
    return (

      <div className="NavBarDefault">
        <div class="menu-toggle" id="hamburger">
          <i class="fas fa-bars"></i>
        </div>
        <div class="overlay"></div>
        <div className="container">
          <nav>
            <h1 className="brand">
              <a href="/">
                <span className="titleBlack">Photo</span>
                <span>D</span>
                <span className="titleBlack">jé</span>
              </a>
            </h1>
            <ul>
              <li><a href="/home"><span className="titlesectionRed">Home</span></a></li>
              <li><a href="/home"><span className="titlesection">Portfolio</span></a></li>
              <li><a href="/apropos"><span className="titlesection">A propos de moi...</span></a></li>
              <li><a href="/contact"><span className="titlesection">Me contacter</span></a></li>
            </ul>
          </nav>
        </div>
      </div >
    );
  }
}
export default NavBarDefault;