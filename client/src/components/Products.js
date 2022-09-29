// Import librarys
// Import components/assets/sections/....
import { ProductCard, Sort } from 'src/components';

export const Products = () => {
  const products = [
    { id: 1, name: 'Lira Earrings', price: 355000 },
    { id: 2, name: 'Lira Earrings', price: 355000 },
    { id: 3, name: 'Lira Earrings', price: 355000 },
    { id: 4, name: 'Lira Earrings', price: 355000 },
    { id: 5, name: 'Lira Earrings', price: 355000 },
    { id: 6, name: 'Lira Earrings', price: 355000 },
    { id: 7, name: 'Lira Earrings', price: 355000 },
    { id: 8, name: 'Lira Earrings', price: 355000 },
    { id: 9, name: 'Lira Earrings', price: 355000 },
    { id: 10, name: 'Lira Earrings', price: 355000 },
    { id: 11, name: 'Lira Earrings', price: 355000 },
    { id: 12, name: 'Lira Earrings', price: 355000 },
    { id: 13, name: 'Lira Earrings', price: 355000 },
    { id: 14, name: 'Lira Earrings', price: 355000 },
    { id: 15, name: 'Lira Earrings', price: 355000 },
    { id: 16, name: 'Lira Earrings', price: 355000 },
  ];
  return (
    <>
      <div className="flex justify-between items-center px-2 molet:flex-col molet:items-start">
        <h2 className="ml-[6px] molet:ml-[0px]">Danh mục sản phẩm</h2>
        <Sort />
      </div>
      <div className="flex flex-wrap justify-around py-2">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
