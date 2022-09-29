// Import librarys
import React from 'react';
// Import components/assets/sections/....
import { Breadcrumb } from 'src/components/Breadcrumb';
import { Pagination, Products } from 'src/components';

export const AllProductsSection = () => {
  return (
    <div className="wrapper mt-[32px] mb-[80px] pb-[24px] px-[16px] overflow-hidden rounded-[16px] shadow-lg">
      <Breadcrumb className="ml-[6px] molet:ml-0" />
      <Products />
      <Pagination />
    </div>
  );
};
