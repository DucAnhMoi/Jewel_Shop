// Import library
import React from 'react';
// Import components/assets/sections/....
import { Button, Brand } from 'src/components';
import { SearchIcon, CartIcon, BarIcon } from 'src/components/icons/Icons';
import { TextField } from 'src/components/fields';
import { Dropdown, MenuItem } from 'src/components/dropdown';
import Avatar from 'public/assets/avatar.jpg';
import Image from 'next/image';

export const Header = () => {
  // UI
  return (
    <div className="flex items-center justify-center bg-bgLightMain dark:bg-bgDarkMain w-full py-[16px] fixed z-10 top-[0] left-[0]">
      <div className="w-desktop tablet:w-tablet mobile:w-mobile flex items-center justify-between">
        {/* Navbar */}

        {/* Mobile & Tablet */}
        <div className="hidden molet:block molet:pt-[36px]">
          <Dropdown
            className="dark:bg-bgLightMain bg-btn rounded-lg"
            content={<MenuItem className="flex flex-col items-start w-[180px]" />}
          >
            <Button
              primary
              className="w-14 h-14 flex justify-center items-center"
              leftIcon={<BarIcon width={24} height={24} />}
            ></Button>
          </Dropdown>
        </div>

        {/* Desktop */}
        <div className="flex pt-[36px] molet:hidden">
          {/* Home */}
          <Button text line className="mr-[8px]">
            Trang chủ
          </Button>
          {/* Product */}
          <Dropdown
            className="dark:bg-bgLightMain bg-btn rounded-lg"
            content={
              <MenuItem
                className="flex flex-col items-start w-[240px]"
                menu={[
                  { id: 1, title: 'Tất cả sản phẩm', to: '/product/all' },
                  { id: 2, title: 'Nhẫn', to: '/about/recruit' },
                  { id: 3, title: 'Dây chuyền', to: '/about/recruit' },
                  { id: 4, title: 'Bông tai', to: '/about/recruit' },
                  { id: 5, title: 'Lắc', to: '/about/recruit' },
                ]}
              />
            }
          >
            <Button text line className="mr-[8px]">
              Sản Phẩm
            </Button>
          </Dropdown>
          {/* About */}
          <Dropdown
            className="dark:bg-bgLightMain bg-btn rounded-lg"
            content={
              <MenuItem
                className="flex flex-col items-start w-[240px]"
                menu={[
                  { id: 1, title: 'Thương hiệu và lịch sử', to: '/about/info' },
                  { id: 2, title: 'Tuyển dụng', to: '/about/recruit' },
                ]}
              />
            }
          >
            <Button text line>
              Về chúng tôi
            </Button>
          </Dropdown>
        </div>

        {/* Brand */}
        <Brand />

        {/* Search, Cart, User */}
        <div className="flex pt-[36px]">
          {/* Search */}
          <div className="flex mr-[8px] molet:mr-[8px] molet:hidden">
            <Dropdown
              className="dark:bg-bgLightMain bg-btn rounded-lg"
              content={<MenuItem className="flex flex-col items-start w-[180px]" />}
            >
              <div className="bg-bgLightMain dark:bg-bgDarkMain w-[200px] molet:w-[0px]">
                <TextField
                  placeholder="Tìm kiếm sản phẩm ..."
                  label="Tìm kiếm"
                  className="molet:hidden"
                />
              </div>
            </Dropdown>
            {/* Search Icon */}
            <Button
              className="w-14 h-14 flex justify-center items-center"
              primary
              leftIcon={<SearchIcon width={24} height={24} />}
            ></Button>
          </div>

          {/* Cart */}
          <Dropdown
            className="dark:bg-bgLightMain bg-btn rounded-lg"
            content={<MenuItem className="flex flex-col items-start w-[180px]" />}
          >
            <Button
              className="mr-[8px] molet:mr-[0px] w-14 h-14 flex justify-center items-center molet:hidden"
              primary
              leftIcon={<CartIcon width={24} height={24} />}
            ></Button>
          </Dropdown>

          {/* User */}
          <div className="w-[160px] flex justify-center">
            <Dropdown
              className="dark:bg-bgLightMain bg-btn rounded-lg"
              content={<MenuItem className="flex flex-col items-start w-[180px]" />}
            >
              <Button primary>
                <div className="flex px-2 py-[3px]">
                  <Image src={Avatar} className="rounded-[50%]" width={48} height={48} />
                  <div className="flex flex-col items-start ml-[8px]">
                    <h6>Hi,</h6>
                    <h6>ĐứcAnh</h6>
                  </div>
                </div>
              </Button>
            </Dropdown>
            {/* <>
              <Button outline className="mr-[8px]">
                <h6>Đăng nhập</h6>
              </Button>
              <Button primary>
                <h6>Đăng ký</h6>
              </Button>
            </> */}
          </div>
        </div>
      </div>
    </div>
  );
};
