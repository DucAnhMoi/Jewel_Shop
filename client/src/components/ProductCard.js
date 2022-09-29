// Import librarys
import Image from 'next/image';
// Import components/assets/sections/....
import { Button } from 'src/components';
import ProductImg from 'public/assets/home3.jpg';

export const ProductCard = ({ product }) => {
  return (
    <div
      key={product.id}
      className="w-[25%] tablet:w-full mobile:w-full flex flex-col items-center py-[24px]"
    >
      <Image src={ProductImg} width={254} height={300} />
      <h5 className="mt-2">{product.name}</h5>
      <h6 className="text-btn-text">{product.price}</h6>
      <Button primary className="w-[254px] py-2 mt-1">
        Thêm vào giỏ
      </Button>
    </div>
  );
};
