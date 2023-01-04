import React from 'react';
import { Hero } from '../features/home/components';
import config from '../config';

const HomePage = () => {
  const title = config.homeTitle;
  const subtitle = config.homeSubtitle;
  const heroImg = config.heroImg;
  return (
    <div>
      <Hero title={title} subtitle={subtitle} imageUrl={heroImg}/>
      {/* Other components */}
    </div>
  );
};

export default HomePage;