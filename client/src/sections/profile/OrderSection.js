// Import librarys
import React, { useState } from 'react';
import { Button } from 'src/components';
import { OrderItem, OrderList } from 'src/sections/profile';
// Import components/assets/sections/....

export const OrderSection = () => {
  const [choose, setChoose] = useState(1);
  return (
    <div className="mt-[16px] p-4 mobile:p-0">
      <div className="my-[8px]">
        <Button text line className="mr-[16px]" onClick={() => setChoose(1)}>
          <h4 className={choose === 1 ? 'text-active' : ''}>Chờ xác nhận</h4>
        </Button>
        <Button text line className="mr-[16px]" onClick={() => setChoose(2)}>
          <h4 className={choose === 2 ? 'text-active' : ''}>Chờ lấy hàng</h4>
        </Button>
        <Button text line className="mr-[16px]" onClick={() => setChoose(3)}>
          <h4 className={choose === 3 ? 'text-active' : ''}>Đang giao</h4>
        </Button>
        <Button text line className="mr-[16px]" onClick={() => setChoose(4)}>
          <h4 className={choose === 4 ? 'text-active' : ''}>Đánh giá</h4>
        </Button>
      </div>
      <div>
        {choose === 1 && <OrderList />}
        {choose === 2 && <OrderItem />}
        {choose === 3 && <OrderItem />}
        {choose === 4 && <OrderItem />}
      </div>
    </div>
  );
};
