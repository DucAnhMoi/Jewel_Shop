// Import library
// Import components/assets/sections/....

import { LogoIcon } from 'src/components/icons/Icons';
import { Button } from 'src/components';

export const Brand = () => {
  return (
    <Button to="/" className="border-transparent">
      <div className="flex flex-col items-center">
        <LogoIcon />
        <div className="text-[40px] font-plf leading-[48px] font-bold mobile:text-[24px] mobile:leading-[32px] text-center tablet:text-[32px] tablet:leading-[40px]">
          JEWELRY SHOP
        </div>
      </div>
    </Button>
  );
};
