// Import librarys
import React from 'react';
// Import components/assets/sections/....
import MainLayout from 'src/layouts/MainLayout';
import { ForgotPasswordSection } from 'src/sections/body';

export default function forgotpassword() {
  // UI
  return (
    <div className="w-desktop tablet:w-tablet mobile:w-mobile bg-bgLightMain dark:bg-bgDarkMain my-[80px] flex justify-center rounded-[16px] overflow-hidden shadow-lg relative">
      <ForgotPasswordSection />
    </div>
  );
}

forgotpassword.getLayout = function getLayout(page) {
  return (
    <MainLayout title="Register" isHeader={false} isFooter={false} isMode={true} isBack={true}>
      {page}
    </MainLayout>
  );
};
