// Import librarys
import React from 'react';
// Import components/assets/sections/....
import MainLayout from 'src/layouts/MainLayout';
import { RegisterSection } from 'src/sections/auth';

export default function register() {
  // UI
  return (
    <div className="wrapper my-[80px] flex rounded-[16px] overflow-hidden shadow-lg relative h-[900px] mobile:h-[950px]">
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
