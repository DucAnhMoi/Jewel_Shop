// Import librarys
import React from 'react';
// Import components/assets/sections/....
import MainLayout from 'src/layouts/MainLayout';
import RegisterSection from 'src/sections/body/RegisterSection';

export default function register() {
  // UI
  return (
    <div className="w-desktop tablet:w-tablet mobile:w-mobile bg-bgLightMain dark:bg-bgDarkMain my-[80px] flex rounded-[16px] overflow-hidden shadow-lg relative h-[900px] mobile:h-[950px]">
      <RegisterSection />
    </div>
  );
}

register.getLayout = function getLayout(page) {
  return (
    <MainLayout title="Register" isHeader={false} isFooter={false} isMode={true} isBack={true}>
      {page}
    </MainLayout>
  );
};
