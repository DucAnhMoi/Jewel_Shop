// Import library
import React from 'react';
// Import components/assets/sections/....
import MainLayout from 'src/layouts/MainLayout';
import { InfoSection } from 'src/sections/about';

export default function info() {
  // UI
  return (
    <div className="w-full bg-bgLight dark:bg-[#303030] mt-[124px] mobile:mt-[140px] flex flex-col justify-center items-center overflow-hidden shadow-lg relative">
      <InfoSection />
    </div>
  );
}

info.getLayout = function getLayout(page) {
  return (
    <MainLayout title="Info" isMode={true}>
      {page}
    </MainLayout>
  );
};
