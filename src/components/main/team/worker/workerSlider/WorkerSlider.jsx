import React, { useState, useEffect } from 'react';
import './WorkerSlider.css'; // Create a CSS file for custom styles
import CONFIG from '../../../../../config';

const ImageSlider = () => {
  // Replace these URLs with your actual image URLs
    const { workers } = CONFIG;

  return (
    <>
      {workers.map((worker, index) => (
      <div className="worker-container-inner-item" key={index}>
          <img src={worker.image} alt={`Slide ${index + 1}`} className='worker-image' />
          <p>{worker.description}</p>
          <h3>
            <span>{worker.name}</span>
            <span>{worker.position}</span>
          </h3>
      </div>
  ))}
    </>
  ) 
};
 
export default ImageSlider;









