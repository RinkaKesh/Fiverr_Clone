import React, { useState } from 'react';
import './Slider.css'

const Slider = ({ images }) => {
  const [startIndex, setStartIndex] = useState(0);

  const displayImages = images.slice(startIndex, startIndex + 5);

  const nextImages = () => {
    const newStartIndex = (startIndex + 5) % images.length;
    setStartIndex(newStartIndex);
  };

  const prevImages = () => {
    const newStartIndex =
      startIndex - 5 < 0 ? images.length - Math.abs(startIndex - 5) : startIndex - 5;
    setStartIndex(newStartIndex);
  };

  return (
    <div className="slider">
      <button className='card_button' onClick={prevImages}> &lt;  </button>
      <div className="image-container">
        {displayImages.map((image) => (
          <img className='card_img' key={image.id} src={image.img} alt={`slide ${image.id}`} />
        ))}
      </div>
      <button className='card_button' onClick={nextImages}> &gt;</button>
    </div>
  );
};

export default Slider;
