// Import library
import React from 'react';
// Import components/assets/sections/....
import { Button, Brand } from '..';
import { TextField } from '../fields';
import { FacebookIcon, InstagramIcon, TiktokIcon, TwitterIcon } from '../icons/Icons';

export const Footer = () => {
  return (
    <div className="flex items-center justify-center bg-bgLightMain dark:bg-bgDarkMain w-full py-[16px]">
      <div className="w-desktop tablet:w-tablet mobile:w-mobile flex items-center justify-between flex-col">
        {/* Register, Contact */}
        <div className="flex justify-between w-full mt-[32px] molet:flex-col">
          {/* Register */}
          <div>
            <h2 className="tablet:text-center tablet:text-[28px]">Đăng ký để nhận khuyến mãi</h2>
            <div className="flex mt-[8px] molet:justify-center">
              {/* Email */}
              <TextField placeholder="Nhập email của bạn" label="Nhập email" />
              <Button primary className="ml-[8px] px-[8px]">
                Xác nhận
              </Button>
            </div>
          </div>

          {/* Contact */}
          <div className="molet:mt-[32px]">
            <h2 className="molet:text-center tablet:text-[28px]">Kết nối với chúng tôi</h2>
            <div className="flex justify-end mt-[8px] molet:justify-center">
              {/* Facebook */}
              <Button
                text
                leftIcon={<FacebookIcon width={40} height={40} />}
                styleLeftIcon="ml-[16px] hover:fill-[#aaa] molet:ml-0 dark:fill-[white] dark:hover:fill-[#aaa]"
              ></Button>
              {/* Twitter */}
              <Button
                text
                leftIcon={<TwitterIcon width={40} height={40} />}
                styleLeftIcon="ml-[16px] hover:fill-[#aaa] dark:fill-[white] dark:hover:fill-[#aaa]"
              ></Button>
              {/* Instagram */}
              <Button
                text
                leftIcon={<InstagramIcon width={40} height={40} />}
                styleLeftIcon="ml-[16px] hover:fill-[#aaa] dark:fill-[white] dark:hover:fill-[#aaa]"
              ></Button>
              {/* Tiktok */}
              <Button
                text
                leftIcon={<TiktokIcon width={40} height={40} />}
                styleLeftIcon="ml-[16px] hover:fill-[#aaa] dark:fill-[white] dark:hover:fill-[#aaa]"
              ></Button>
            </div>
          </div>
        </div>

        {/* Line */}
        <div className="w-full h-[2px] bg-[#ccc] my-[32px]"></div>

        {/* Info */}
        <div className="flex w-full flex-wrap">
          {/* Publishing  */}
          <div className="w-[40%] molet:w-full flex flex-col items-start molet:items-center">
            <Brand />
            <div className="mt-[14px]">Số GCNDKDN: 2501150335</div>
            <div className="mt-[14px]">Cấp lần đầu: Ngày 26/03/2017</div>
            <div className="mt-[14px]">Đăng ký thay đổi lần thứ 16: Ngày 07/05/2022</div>
          </div>
          {/* About */}
          <div className="w-[20%] molet:w-[50%] flex flex-col items-start mt-[48px]">
            <h5>Về chúng tôi</h5>
            <Button text className="mt-[16px] font-semibold" line>
              Thương hiệu
            </Button>
            <Button text className="mt-[16px] font-semibold" line>
              Lịch sử
            </Button>
            <Button text className="mt-[16px] font-semibold" line>
              Tuyển dụng
            </Button>
          </div>
          {/* Account */}
          <div className="w-[20%] molet:w-[50%] flex flex-col items-start mt-[48px]">
            <h5>Tài khoản</h5>
            <Button text className="mt-[16px] font-semibold" line>
              Lịch sử mua hàng
            </Button>
            <Button text className="mt-[16px] font-semibold" line>
              Giỏ hàng
            </Button>
            <Button text className="mt-[16px] font-semibold" line>
              Thông tin
            </Button>
          </div>
          {/* Service */}
          <div className="w-[20%] molet:w-[50%] flex flex-col items-start mt-[48px]">
            <h5>Dịch vụ khách hàng</h5>
            <Button text className="mt-[16px] font-semibold" line>
              Thanh toán
            </Button>
            <Button text className="mt-[16px] font-semibold" line>
              Cẩm nang sử dụng
            </Button>
            <Button text className="mt-[16px] font-semibold" line>
              Câu hỏi thường gặp
            </Button>
          </div>
        </div>

        {/*Copyright*/}
        <div className="mt-[32px]">JewelShop@2022</div>
      </div>
    </div>
  );
};
