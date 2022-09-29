// Import library
import React from 'react';
// Import components/assets/sections/....
import MainLayout from 'src/layouts/MainLayout';
import { RecruitSection } from 'src/sections/about';

export default function recruit() {
  // UI
  return (
    <div className="w-full bg-bgLight dark:bg-[#303030] mt-[124px] mobile:mt-[140px] flex flex-col justify-center items-center overflow-hidden shadow-lg relative">
      <RecruitSection />
    </div>
  );
}

recruit.getLayout = function getLayout(page) {
  return (
    <MainLayout title="Recruit" isMode={true}>
      {page}
    </MainLayout>
  );
};
