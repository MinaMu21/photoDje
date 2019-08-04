import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import picture1 from '../images/IMG_1548.jpeg';
import picture2 from '../images/IMG_1208.jpeg';
import picture3 from '../images/03012006-IMG_5931.jpeg';

import './Slider.css';

class Slider extends Component {
  render() {
    return (
      <div className="borderCarousel">
        <Carousel infiniteLoop useKeyboardArrows autoPlay className="slider">
          <div className="picture">
            <img src={picture1} alt="picture1" width="100%" className="imgSlider" />
          </div>
          <div className="picture">
            <img src={picture2} alt="picture2" width="100%" className="imgSlider" />
          </div>
          <div className="picture">
            <img src={picture3} alt="picture3" width="100%" className="imgSlider" />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Slider;
