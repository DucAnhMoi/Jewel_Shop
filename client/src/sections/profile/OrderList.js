// Import librarys
// Import components/assets/sections/....

import { OrderItem } from 'src/sections/profile';

export const OrderList = () => {
  const list = [1, 2, 3];
  return (
    <div>
      {list.map(() => (
        <OrderItem />
      ))}
    </div>
  );
};
