// Import library
// Import components/assets/sections/....

import { Button } from 'src/components';

export const Breadcrumb = ({ className }) => {
  const option = [
    { title: 'Trang chủ', to: '/' },
    { title: 'Giỏ hàng', to: '/cart' },
    { title: 'Trang thanh toán', to: '/payment' },
  ];
  return (
    <div className={`flex self-start my-[32px] mobile:px-[8px] ${className}`}>
      {option?.map((item, id) => (
        <div className="flex" key={item.title}>
          <Button text line to={item.to} className="mx-2 mobile:mx-2">
            {item.title}
          </Button>
          {id === option.length - 1 ? '' : '>>'}
        </div>
      ))}
    </div>
  );
};
