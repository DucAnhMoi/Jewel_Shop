// Import librarys
import React, { useState } from 'react';
// Import components/assets/sections/....
import { Breadcrumb } from 'src/components/Breadcrumb';
import { InfoSection, OrderSection } from 'src/sections/profile';
import { Button } from 'src/components';

export const ProfileSection = () => {
  const [choose, setChoose] = useState(1);
  //  UI
  return (
    <div className="wrapper mt-[32px] mb-[80px] pb-[36px] px-[32px] mobile:px-[16px] overflow-hidden rounded-[16px] shadow-lg">
      <Breadcrumb className="ml-[-8px]" />
      <div className="my-[8px]">
        <Button outline className="mr-[32px] px-4 py-2" onClick={() => setChoose(1)}>
          <h3 className={choose === 1 ? 'text-active' : ''}>Thông tin</h3>
        </Button>
        <Button outline className="mr-[32px] px-4 py-2" onClick={() => setChoose(2)}>
          <h3 className={choose === 1 ? '' : 'text-active'}>Đơn hàng</h3>
        </Button>
      </div>
      <div>
        {choose === 1 && <InfoSection />}
        {choose === 2 && <OrderSection />}
      </div>
    </div>
  );
};
