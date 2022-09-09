// Import librarys
import React from 'react';
import Image from 'next/image';
// Import components/assets/sections/....
import LoginForm from 'src/sections/forms/LoginForm';
import { Brand } from 'src/components';
import loginImg from 'public/assets/login.jpg';

const LoginSection = () => {
  return (
    <>
      {/* Image */}
      <div className="tablet:hidden mobile:hidden w-[646px]">
        <Image src={loginImg} priority={true} />
      </div>

      <div className="w-[490px] pt-[48px] px-[40px] mobile:px-[20px]">
        {/* Brand */}
        <Brand />
        {/* Form */}
        <LoginForm />
      </div>
    </>
  );
};

export default LoginSection;
