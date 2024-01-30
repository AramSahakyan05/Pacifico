import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'; // Create a CSS file for custom styles
import IMAGES from './image';

const ImageSlider = () => {
  // Replace these URLs with your actual image URLs
const imageUrls = [
    IMAGES.showcase1,
    IMAGES.showcase2,
    IMAGES.showcase3,
    IMAGES.showcase4,
    IMAGES.showcase5,
    IMAGES.showcase6,
    // Add more image URLs as needed
  ];

  const [centerPadding, setCenterPadding] = useState('50px');

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 3000, // Slide changes every 3 seconds
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: centerPadding,
    arrows: false, // Hide the arrow buttons
  };

  return (
    <div className="carousel" id='gallery'>
        <div className='carousel-title'>
            <h1>Explore Latest Projects</h1>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority
have suffered alteration, by injected humour, or new randomised words.</p>
        </div>
        <Slider {...settings}>
            {imageUrls.map((imageUrl, index) => (
                <div className="image-slide" key={index}>
                    <img src={imageUrl} alt={`Slide ${index + 1}`} />
                </div>
            ))}
        </Slider>
    </div>
  );
};

export default ImageSlider;









