// Import librarys
import React, { useState } from 'react';
import Image from 'next/image';
// Import components/assets/sections/....
import Product1Img from 'public/assets/product1.jpg';
import Product2Img from 'public/assets/product2.jpg';
import Product3Img from 'public/assets/product3.jpg';
import Product4Img from 'public/assets/product4.jpg';
import { StarIcon } from 'src/components/icons/Icons';
import { Button } from 'src/components';

export const ProductBriefing = () => {
  const [img, setImg] = useState(Product1Img);
  const imgList = [Product1Img, Product2Img, Product3Img, Product4Img];
  return (
    <div className="flex justify-between px-4">
      <div className="flex flex-col">
        {imgList?.map((item) => (
          <div className="mb-[12px]">
            <Image
              src={item}
              width={156}
              height={107}
              className="rounded-lg hover:brightness-50"
              onClick={() => setImg(item)}
            />
          </div>
        ))}
      </div>
      <div className="mx-[40px]">
        <Image src={img} width={465} height={450} className="rounded-3xl" />
      </div>
      <div className="w-[450px]">
        <h1>Bong tai Meo</h1>
        <div className="flex items-center justify-between mt-[12px]">
          <div className="flex items-center">
            <StarIcon width={24} height={24} className="fill-[#FBBC05]" />
            <StarIcon width={24} height={24} className="fill-[#FBBC05]" />
            <StarIcon width={24} height={24} className="fill-[#FBBC05]" />
            <StarIcon width={24} height={24} className="fill-[#FBBC05]" />
            <StarIcon width={24} height={24} className="fill-black dark:fill-white" />
          </div>
          <div>Số lượng: 10</div>
          <h5 className="text-active">Còn hàng</h5>
        </div>
        <div className="flex items-center mt-[12px]">
          <h2 className="mr-[12px] line-through">500,000</h2>
          <div>-50%</div>
        </div>
        <h1 className="mt-[12px]">250,000</h1>
        <div className="mt-[12px]">Kích thước</div>
        <div className="mt-[12px]">Màu sắc</div>
        <div className="mt-[12px]">Số lượng:</div>
        <div className="mt-[12px] flex items-center justify-center">
          <Button primary className="px-4 py-1 text-[48px]">
            -
          </Button>
          <h3 className="mx-[16px]">5</h3>
          <Button primary className="px-4 py-1 text-[48px]">
            +
          </Button>
        </div>
        <Button outline className="px-6 py-2 mt-[24px]">
          Thêm vào giỏ hàng
        </Button>
      </div>
    </div>
  );
};
