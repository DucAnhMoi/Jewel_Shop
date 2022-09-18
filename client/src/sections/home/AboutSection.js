// Import library
import React from 'react';
import Image from 'next/image';
// Import components/assets/sections/....
import AboutImg from 'public/assets/home2.jpg';
import { Button } from 'src/components';

export const AboutSection = () => {
  return (
    <div className="w-desktop tablet:w-tablet mobile:w-mobile flex molet:flex-col-reverse py-[120px] tablet:py-[60px] mobile:pt-[0px] mobile:pb-[30px] bg-bgLightMain dark:bg-bgDarkMain rounded-t-lg">
      <div className="mx-[40px] tablet:mx-[32px] mobile:mx-[16px]">
        <h2 className="molet:mt-[16px]">Về chúng tôi</h2>
        <h1 className="font-plf mt-[55px] mb-[32px]">"Ngày mai phải tốt hơn ngày hôm nay"</h1>
        <div className="">
          Một con vịt xòe ra hai cái cánh, Nó kêu rằng cáp cáp cáp cạp cạp cạp. Gặp hồ nước nó bì bà
          bì bõm. Lúc lên bờ vẫy cái cánh cho khô!
        </div>
        <Button
          primary
          className="px-[46px] py-[8px] mobile:w-full mt-[86px] tablet:mt-[60px] mobile:mt-[48px]"
        >
          Tìm hiểu thêm
        </Button>
      </div>
      <div className="tablet:w-[480px] overflow-hidden rounded-lg">
        <Image src={AboutImg} />
      </div>
    </div>
  );
};
