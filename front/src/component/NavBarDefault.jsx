import React, { Component } from 'react';

import './NavBarDefault.css';

class NavBarDefault extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (

      <nav>
        <div class="overlay"></div>
        <div className="logo">
          <h1 className="brand">
            <a href="/" className="logoWhite">
              Photo
              <span className="logoGreen">D</span>
              jé
            </a>
          </h1>
        </div>
        <ul className="nav-links">
          <li><a href="/home"><span className="titlesectionRed">Home</span></a></li>
          <li><a href="/home"><span className="titlesection">Portfolio</span></a></li>
          <li><a href="/apropos"><span className="titlesection">A propos</span></a></li>
          <li><a href="/contact"><span className="titlesection">Contact</span></a></li>
        </ul>

        <div id="camera">
          <div className="strip"></div>
          <div className="lens"></div>
          <div className="led"></div>
          <div className="button"></div>
        </div>
        <div id="panel"></div>
      </nav>


    );
  }
}
export default NavBarDefault;