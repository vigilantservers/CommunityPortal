import React from 'react';
import './Hero.css';

const Hero = ({ title, subtitle, imageUrl }) => {
  return (
    <div className='hero'>
        <div className="hero-image">
        <img src={imageUrl} alt="" />
        <div className='overlay'>
            <div className="text">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </div>
        </div>
        </div>
    </div>
  );
};

export default Hero;