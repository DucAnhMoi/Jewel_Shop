// Import librarys
import React from 'react';
// Import components/assets/sections/....
import MainLayout from 'src/layouts/MainLayout';
import { ResetPasswordSection } from 'src/sections/body';

const resetpassword = () => {
  return (
    <div className="w-desktop tablet:w-tablet mobile:w-mobile bg-bgLightMain dark:bg-bgDarkMain my-[80px] flex justify-center rounded-[16px] overflow-hidden shadow-lg relative">
      <ResetPasswordSection />
    </div>
  );
};

resetpassword.getLayout = function getLayout(page) {
  return (
    <MainLayout title="Register" isHeader={false} isFooter={false} isMode={true} isBack={true}>
      {page}
    </MainLayout>
  );
};

export default resetpassword;
