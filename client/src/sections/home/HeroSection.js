// Import library
import React from 'react';
import Image from 'next/image';
// Import components/assets/sections/....
import HeroImg from 'public/assets/home1.jpg';
import { Button } from 'src/components';

export const HeroSection = () => {
  return (
    <div className="relative w-full tablet:w-tablet mobile:w-mobile">
      <Image src={HeroImg} className="brightness-50" />
      <div className="absolute top-[0] left-[0] flex flex-col items-center mobile:items-start justify-center w-full mt-[140px] mobile:mt-[16px] tablet:mt-[48px] mobile:px-[16px]">
        <h1 className="text-[96px] leading-[106px] font-plf text-white mb-[60px] mobile:mb-[16px] tablet:mb-[38px] mobile:text-3xl tablet:text-4xl">
          THẾ GIỚI NỮ TRANG
        </h1>
        <div className="h-[2px] bg-white w-2/3 mobile:hidden"></div>
        <div className="my-[16px] mobile:my-[0px] flex mobile:flex-col">
          <h3 className="text-white mr-[24px] tablet:mr-[12px] mobile:text-base mobile:leading-[24px] tablet:text-base">
            Tôn vinh vẻ đẹp phái nữ
          </h3>
          <h3 className="text-white mr-[24px] tablet:mr-[12px] mobile:text-base mobile:leading-[24px] tablet:text-base">
            Trao quà tặng
          </h3>
          <h3 className="text-white mobile:text-base mobile:leading-[24px] tablet:text-base">
            Trao yêu thương
          </h3>
        </div>
        <div className="h-[2px] bg-white w-2/3 mobile:hidden"></div>
        <Button
          className="px-[46px] py-[8px] mt-[60px] mobile:mt-[16px] tablet:mt-[24px] mobile:w-full"
          secondary
        >
          Tìm hiểu thêm
        </Button>
      </div>
    </div>
  );
};
