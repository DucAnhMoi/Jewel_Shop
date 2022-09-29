// Import library
import React from 'react';
import Image from 'next/image';
// Import components/assets/sections/....
import { Button, ProductCard } from 'src/components';

export const ProductSection = () => {
  const products = [
    { id: 1, name: 'Lira Earrings', price: 355000 },
    { id: 2, name: 'Lira Earrings', price: 355000 },
    { id: 3, name: 'Lira Earrings', price: 355000 },
    { id: 4, name: 'Lira Earrings', price: 355000 },
  ];
  return (
    <div className="w-desktop tablet:w-tablet mobile:w-mobile tablet:py-[60px] mobile:pt-[0px] mobile:pb-[30px] bg-bgLightMain dark:bg-bgDarkMain px-[40px] tablet:px-[32px] mobile:px-[16px]">
      <div className="flex justify-between molet:flex-col">
        <h2>Sản phẩm nổi bật</h2>
        <Button primary className="px-[46px] py-[8px] mobile:w-full tablet:w-max  molet:mt-[12px]">
          Xem tất cả
        </Button>
      </div>
      <div className="flex flex-wrap justify-around mx-[-16px] py-2">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
