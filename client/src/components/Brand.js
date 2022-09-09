// Import library
// Import components/assets/sections/....

import { LogoIcon } from 'src/components/icons/Icons';

export const Brand = () => {
  return (
    <div className="flex flex-col items-center">
      <LogoIcon />
      <div className="text-[40px] font-plf leading-[48px] font-bold mobile:text-[24px] mobile:leading-[32px]">
        JEWELRY SHOP
      </div>
    </div>
  );
};
