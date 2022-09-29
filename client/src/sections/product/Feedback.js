// Import librarys
import React from 'react';
import Image from 'next/image';
// Import components/assets/sections/....
import { Button } from 'src/components';
import Product1Img from 'public/assets/product1.jpg';
import Avatar from 'public/assets/avatar.jpg';
import { StarIcon } from 'src/components/icons/Icons';
import { TextField } from 'src/components/fields';

export const Feedback = () => {
  const feedbacks = [
    { id: 1, idUser: 1, star: 2, comment: 'Nhu cuc' },
    { id: 2, idUser: 2, star: 5, comment: 'Tuyet qua', img: Product1Img },
  ];
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="px-4 mt-[24px] pb-8">
      {/* Option */}
      <div className="flex">
        <h5>Đánh giá sản phẩm</h5>
        <Button className="px-4 py-1 mx-2" outline>
          Tất cả
        </Button>
        <Button className="px-4 py-1 mx-2" outline>
          5 Sao
        </Button>
        <Button className="px-4 py-1 mx-2" outline>
          4 Sao
        </Button>
        <Button className="px-4 py-1 mx-2" outline>
          3 Sao
        </Button>
        <Button className="px-4 py-1 mx-2" outline>
          2 Sao
        </Button>
        <Button className="px-4 py-1 mx-2" outline>
          1 Sao
        </Button>
      </div>
      {/* Feedback */}
      <div>
        {feedbacks?.map((item) => (
          <div className="my-4">
            <div className="flex item-center my-2">
              <div className="w-[54px] height-[54px] mr-[12px]">
                <Image src={Avatar} width={54} height={54} className="rounded-full" />
              </div>
              <div>
                <h6>Ducanh</h6>
                <div className="flex items-center">
                  {stars.map((star) => {
                    if (star <= item.star)
                      return <StarIcon width={12} height={12} className="fill-[#FBBC05]" />;
                    else
                      return (
                        <StarIcon width={12} height={12} className="fill-black dark:fill-white" />
                      );
                  })}
                </div>
                <p className="mt-1">2022-12-23 00:18</p>
              </div>
            </div>
            <div className="my-2 ml-[64px]">
              <div>{item.comment}</div>
              <div className="mt-1">
                <Image src={item?.img} width={200} />
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
      {/* My feedbacks */}
      <div className="border-[1px] border-solid shadow-xl p-4">
        <h5>Đánh giá sản phẩm này</h5>
        <div className="flex items-center mb-4">
          <StarIcon width={48} height={48} className="fill-[#FBBC05]" />
          <StarIcon width={48} height={48} className="fill-[#FBBC05]" />
          <StarIcon width={48} height={48} className="fill-[#FBBC05]" />
          <StarIcon width={48} height={48} className="fill-[#FBBC05]" />
          <StarIcon width={48} height={48} className="fill-[#FBBC05]" />
        </div>
        <TextField placeholder="Nhập mô tả tại đây" label="Feedback" fullWidth />
        <div className="flex items-center mt-4">
          <div>Thêm hình ảnh hoặc video</div>
          <input className="ml-2" type="file" />
        </div>
        <Button primary className="px-6 py-2 mt-2">
          Gửi
        </Button>
      </div>
    </div>
  );
};
