import React, { useState, useEffect } from "react";

const HeadingSlide = () => {
  const texts = [
    "newsan unknown printer took a galley of type andscrambled",
    "In this example, we create a component called",
    " the text will automatically cycle through the texts in",
  ]; // Array of texts
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState(texts[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === texts.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Interval duration in milliseconds (e.g., 2000ms = 2 seconds)

    return () => {
      clearInterval(intervalId); // Clean up the interval when the component unmounts
    };
  }, [texts.length]);

  useEffect(() => {
    setCurrentText(texts[currentIndex]); // Update the current text based on the current index
  }, [currentIndex, texts]);

  return (
    <div className="text-center">
      <h1 className="">{currentText}</h1>
    </div>
  );
};

export default HeadingSlide;
