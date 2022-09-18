// Import library
import Image from 'next/image';
import React from 'react';
// Import components/assets/sections/....
import { Button } from 'src/components';
import AlbumImg from 'public/assets/home4.jpg';

export const AlbumSection = () => {
  return (
    <div className="relative w-full tablet:w-tablet mobile:w-mobile">
      <Image src={AlbumImg} />
      <div className="absolute top-[40%] tablet:top-[20%] mobile:top-[10%] left-[5%] w-full h-full mobile:left-0 mobile:px-[12px]">
        <h3 className="text-white">Bộ sưu tập mới nhất</h3>
        <h1 className="text-[48px] leading-[64px] mobile:text-3xl text-white font-plf mt-[32px] molet:mt-[0px]">
          Ánh trăng người tình
        </h1>
        <div className="text-white w-[480px] tablet:w-[375px] mobile:w-[280px]">
          Một con vịt xòe ra hai cái cánh, Nó kêu rằng cáp cáp cáp cạp cạp cạp. Gặp hồ nước nó bì bà
          bì bõm. Lúc lên bờ vẫy cái cánh cho khô!
        </div>
        <Button className="px-[46px] py-[8px] mobile:w-full mt-[16px]" secondary>
          Tìm hiểu thêm
        </Button>
      </div>
    </div>
  );
};
