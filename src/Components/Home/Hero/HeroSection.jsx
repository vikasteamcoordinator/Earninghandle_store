import React, { useState } from "react";
import "./HeroSection.css";

const slides = [
  {
    title: "Explore the Future",
    subtitle: "Innovation drives us forward",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Design with Passion",
    subtitle: "Creative solutions for modern problems",
    image:
      "https://plus.unsplash.com/premium_photo-1719289799376-d3de0ca4ddbc?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Code that Matters",
    subtitle: "Build meaningful digital products",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Scale with Confidence",
    subtitle: "Robust infrastructure for growth",
    image:
      "https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?w=600&auto=format&fit=crop&q=60",
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
            <div className={className} key={index}>
              <div className="leftContent">
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
              </div>
              <div className="rightContent">
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