// Import library
import React from 'react';
// Import components/assets/sections/....
import MainLayout from 'src/layouts/MainLayout';
import { HomeSection } from 'src/sections/home';

export default function home() {
  // UI
  return (
    <div className="w-full bg-bgLight dark:bg-[#303030] mt-[124px] mobile:mt-[140px] flex flex-col justify-center items-center overflow-hidden shadow-lg relative">
      <HomeSection />
    </div>
  );
}

home.getLayout = function getLayout(page) {
  return (
    <MainLayout title="Home" isMode={true}>
      {page}
    </MainLayout>
  );
};
