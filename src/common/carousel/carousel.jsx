import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

class CarouselPanel extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 mask"
            src="../img/carousel1.jpg"
            alt="First slide"
          />
          <Carousel.Caption bsPrefix="carousel-caption carousel-first">
            <h1>Plants for your garden center.</h1>
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 mask"
            src="../img/carousel2.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1>Wide range of Pots for You!</h1>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 mask"
            src="../img/carousel3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1>Third slide label</h1>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default CarouselPanel;
