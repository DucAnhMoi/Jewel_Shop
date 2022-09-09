// Import librarys
import React from 'react';
import Image from 'next/image';
// Import components/assets/sections/....
import RegisterForm from 'src/sections/forms/RegisterForm';
import registerImg from 'public/assets/register.jpg';
import { Brand } from 'src/components';

const RegisterSection = () => {
  return (
    <>
      {/* Image */}
      <div className="tablet:hidden mobile:hidden w-[646px]">
        <Image src={registerImg} priority={true} />
      </div>

      <div className="w-[490px] pt-[48px] px-[40px] mobile:px-[20px]">
        {/* Brand */}
        <Brand />
        {/* Form */}
        <RegisterForm />
      </div>
    </>
  );
};

export default RegisterSection;
