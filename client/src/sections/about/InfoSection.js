// Import librarys
import React from 'react';
import Image from 'next/image';
// Import components/assets/sections/....
import { Breadcrumb } from 'src/components/Breadcrumb';
import About1Img from 'public/assets/home4.jpg';
import About2Img from 'public/assets/about2.jpg';
import About3Img from 'public/assets/about3.jpg';
import About4Img from 'public/assets/about4.jpg';

export const InfoSection = () => {
  return (
    <>
      <div className="relative w-full tablet:w-tablet mobile:w-mobile">
        <Image src={About1Img} />
        <div className="absolute left-[15%] top-[15%] mobile:left-[5%] mobile:top-[5%] w-[350px]">
          <h1 className="text-[48px] leading-[58px] font-plf text-white mb-[60px] mobile:mb-[16px] tablet:mb-[38px] mobile:text-3xl tablet:text-4xl">
            "Jewelry Shop - Tales of Happiness"
          </h1>
          <div className="text-white">
            Lần đầu ra mắt thị trường vào năm 2022, Jewelry Shop mong muốn mang tới những sản phẩm
            Nữ trang được đầu từ về thiết kế, minh bạch về thông tin giao dịch hàng hóa và mang đến
            khách hàng dịch vụ hậu mãi trọn vẹn
          </div>
        </div>
      </div>
      <div className="wrapper mt-[32px] mb-[80px] pb-[24px] px-[16px] overflow-hidden rounded-[16px] shadow-lg">
        <Breadcrumb className="ml-[6px] molet:ml-0" />
        <div className="flex molet:flex-col">
          <div className="w-1/2 molet:w-full">
            <Image src={About2Img} width={548} height={383} />
          </div>
          <div className="w-1/2 molet:w-full mt-[56px] molet:mt-[0px] talet:pl-[56px]">
            <h4 className="mb-[16px]">Phong cách Hàn Quốc</h4>
            <div>
              Lấy tầm nhìn trở thành "Nhà bán lẻ trang sức dẫn đầu xu hướng", trang sức Jewelry Shop
              mang phong cách trẻ trung, hiện đại, liên tục cập nhật những xu hướng mới từ Hàn Quốc
            </div>
          </div>
        </div>
        <div className="flex molet:flex-col-reverse">
          <div className="w-1/2 molet:w-full mt-[56px] molet:mt-[0px] pl-[56px] mobile:pl-0">
            <h4 className="mb-[16px]">Phong cách Hàn Quốc</h4>
            <div>
              Lấy tầm nhìn trở thành "Nhà bán lẻ trang sức dẫn đầu xu hướng", trang sức Jewelry Shop
              mang phong cách trẻ trung, hiện đại, liên tục cập nhật những xu hướng mới từ Hàn Quốc
            </div>
          </div>
          <div className="w-1/2 molet:w-full">
            <Image src={About3Img} width={548} height={383} />
          </div>
        </div>
        <div className="flex molet:flex-col">
          <div className="w-1/2 molet:w-full">
            <Image src={About4Img} width={548} height={383} />
          </div>
          <div className="w-1/2 molet:w-full mt-[56px] molet:mt-[0px] talet:pl-[56px]">
            <h4 className="mb-[16px]">Phong cách Hàn Quốc</h4>
            <div>
              Lấy tầm nhìn trở thành "Nhà bán lẻ trang sức dẫn đầu xu hướng", trang sức Jewelry Shop
              mang phong cách trẻ trung, hiện đại, liên tục cập nhật những xu hướng mới từ Hàn Quốc
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
