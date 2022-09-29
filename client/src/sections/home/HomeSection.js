// Import library
import React from 'react';
// Import components/assets/sections/....
import { HeroSection, AboutSection, ProductSection, AlbumSection } from 'src/sections/home';

export const HomeSection = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProductSection />
      <AlbumSection />
    </>
  );
};
