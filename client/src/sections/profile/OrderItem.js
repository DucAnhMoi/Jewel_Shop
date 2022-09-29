// Import librarys
import Image from 'next/image';
// Import components/assets/sections/....
import { Button } from 'src/components';
import ProductImg from 'public/assets/home3.jpg';

export const OrderItem = () => {
  const products = [
    { id: 1, name: 'Lira Earrings', price: 355000 },
    { id: 2, name: 'Lira Earrings', price: 355000 },
    { id: 3, name: 'Lira Earrings', price: 355000 },
  ];
  return (
    <div className="mb-[48px]">
      <h6>Mã đơn hàng: "12631236"</h6>
      {products.map((product) => (
        <div
          key={product.id}
          className="w-full tablet:w-full mobile:w-full flex justify-between items-center px-[12px] py-[24px] hover:bg-[#666]"
        >
          <div className="flex items-center">
            <Image src={ProductImg} width={100} height={100} />
            <div className="mt-2 ml-4 self-start">
              <h5>{product.name}</h5>
            </div>
          </div>
          <h6 className="text-btn-text">{product.price}</h6>
        </div>
      ))}
      <div className="flex mt-2 justify-between items-center">
        <div className="flex molet:flex-col">
          <Button primary className="px-4 py-2 mr-2 molet:mr-0 molet:mb-2">
            Xem chi tiết
          </Button>
          <Button outline className="px-4 py-2">
            Xem chi tiết
          </Button>
        </div>
        <h6>Tổng tiền: 213,000,000</h6>
      </div>
      <hr className="mt-4" />
    </div>
  );
};
