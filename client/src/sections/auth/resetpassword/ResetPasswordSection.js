// Import librarys
import React from 'react';
// Import components/assets/sections/....
import { Brand } from 'src/components';
import { ResetPasswordForm } from 'src/sections/auth';

export const ResetPasswordSection = () => {
  return (
    <div className="w-[490px] py-[48px] px-[40px] mobile:px-[20px]">
      {/* Brand */}
      <Brand />
      {/* Form */}
      <ResetPasswordForm />
    </div>
  );
};
