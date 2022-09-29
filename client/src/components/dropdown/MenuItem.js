// Import library
import { useState } from 'react';
// Import components/assets/sections/....
import { Button } from 'src/components';

export const MenuItem = ({ className, menu }) => {
  // id: 1,
  // title: 'Trang chủ',
  // to: '',
  // href: '',
  // icon: '',
  // children: [{}, {}],
  const menuphu = [
    {
      id: 1,
      title: 'Trang chủ',
      to: '',
    },
    {
      id: 2,
      title: 'Sản phẩm',
      to: '',
      children: [
        {
          id: 1,
          title: 'Nhẫn',
          to: '',
        },
        {
          id: 2,
          title: 'Vòng tay',
          to: '',
        },
        {
          id: 3,
          title: 'Dây chuyền',
          to: '',
        },
      ],
    },
    {
      id: 3,
      title: 'Về chúng tôi',
      to: '',
    },
  ];
  const [menuList, setMenuList] = useState([[...menu]]);
  const menuRender = menuList[menuList.length - 1];
  return (
    <div className={className}>
      {menuList.length > 1 ? (
        <Button
          className="px-[16px] py-[8px] w-full text-left"
          onClick={() => {
            let newMenuList = menuList.slice(0, menuList.length - 1);
            setMenuList([...newMenuList]);
          }}
        >
          Quay lại
        </Button>
      ) : (
        <></>
      )}
      {menuRender?.map((item) => (
        <Button
          primary
          key={item.id}
          className="px-[16px] py-[8px] w-full text-left"
          to={item.to ? item.to : ''}
          href={item.href ? item.href : ''}
          onClick={() => {
            if (item.children) {
              setMenuList([[...menuRender], [...item.children]]);
            }
          }}
          onBack={() => {
            setMenuList([]);
          }}
        >
          {item.title}
        </Button>
      ))}
    </div>
  );
};
