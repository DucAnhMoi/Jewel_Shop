// Import library
import React from 'react';
// Import components/assets/sections/....
import { Button } from 'src/components';
import { FacebookColorIcon, GoogleColorIcon } from 'src/components/icons/Icons';

export const LoginOtherSection = () => {
  return (
    <>
      <h6 className="mt-[32px]">Hoặc đăng nhập bằng</h6>

      {/* Login other */}
      <div className="mt-[24px] flex justify-between">
        <Button
          outline
          to="/auth/login"
          leftIcon={<FacebookColorIcon />}
          className="flex items-center px-[32px] py-[8px] rounded-[9999px]"
          styleLeftIcon="mr-[16px]"
        >
          Facebook
        </Button>
        <Button
          outline
          to="/auth/login"
          leftIcon={<GoogleColorIcon />}
          className="flex items-center px-[32px] py-[8px] rounded-[9999px]"
          styleLeftIcon="mr-[16px]"
        >
          Google
        </Button>
      </div>
    </>
  );
};
