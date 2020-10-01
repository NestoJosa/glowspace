import React from "react";
import Slider from "react-slick";

import './slider.css';
import "./slick.css";
import "./slick-theme.css";

export default class SimpleSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <section id="slider-section">
        <Slider {...settings}>
          <div id="img1" className="img-container">
          </div>
          <div id="img2" className="img-container">
          </div>
          <div id="img3" className="img-container">
          </div>
        </Slider>
      </section>
    );
  }
}
