import React, { useState } from "react";
import "./Test.css";

const Test = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://via.placeholder.com/500x300",
    "https://via.placeholder.com/500x300",
    "https://via.placeholder.com/500x300",
    // Add more image URLs here
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider-container">
      <div className="slider">
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        ))}
      </div>

      <button className="prev-btn" onClick={prevSlide}>
        Previous
      </button>
      <button className="next-btn" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default Test;
