import React, { useState } from "react";
import "./HeroSection.css";

import img1 from '../../../Assets/heroSec/1.png'
import img2 from '../../../Assets/heroSec/2.png'
import img3 from '../../../Assets/heroSec/3.png'
import img4 from '../../../Assets/heroSec/4.png'

const slides = [
  {
    title: "Explore the Future",
    subtitle: "Innovation drives us forward",
    image:img1
  },
  {
    title: "Design with Passion",
    subtitle: "Creative solutions for modern problems",
    image:img2
  },
  {
    title: "Code that Matters",
    subtitle: "Build meaningful digital products",
    image:img3
  },
  {
    title: "Scale with Confidence",
    subtitle: "Robust infrastructure for growth",
    image:img4
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(0);
  const [animDirection, setAnimDirection] = useState("right");

  const nextSlide = () => {
    setPrev(current);
    setCurrent((prev) => (prev + 1) % slides.length);
    setAnimDirection("right");
  };

  const prevSlide = () => {
    setPrev(current);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setAnimDirection("left");
  };

  return (
    <div className="heroMain">
      <div className="carouselContainer container">
        {slides.map((slide, index) => {
          let className = "slide";
          if (index === current) {
            className += ` active ${animDirection}-in`;
          } else if (index === prev) {
            className += ` ${animDirection}-out`;
          }

          return (
            <div className={`${className}`} key={index}>
              <div className="leftContent col-md-6">
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
              </div>
              <div className="rightContent col-md-6">
                <img src={slide.image} alt={`Slide ${index + 1}`} />
              </div>
            </div>
          );
        })}

        <button className="prevBtn" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="nextBtn" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default HeroSection;