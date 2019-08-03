import React from "react";
import "./HomePage.css";
import Slider from './Slider';
// import Footer from './Footer';


const HomePage = () => (
  <div className="HomePage">
    <div className="section_slider">
      <Slider />
    </div>
    {/* <div className="section_footer">
      <Footer />
    </div> */}
  </div>
)

export default HomePage;

