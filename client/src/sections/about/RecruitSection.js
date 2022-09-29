// Import librarys
import React from 'react';
import { Button } from 'src/components';
// Import components/assets/sections/....
import { Breadcrumb } from 'src/components/Breadcrumb';
import { CheckIcon } from 'src/components/icons/Icons';

export const RecruitSection = () => {
  return (
    <div className="wrapper mt-[32px] mb-[80px] pb-[24px] px-[32px] overflow-hidden rounded-[16px] shadow-lg">
      <Breadcrumb className="ml-[-8px] molet:ml-0" />
      <h2 className="my-6">Cơ hội làm việc tại JEWELRY SHOP</h2>
      <h4 className="my-5">
        Tại JEWELRY SHOP, chúng tôi tự hào mang đến những giá trị vô hình đến khách hàng cũng như
        từng thành viên.
      </h4>
      <div className="my-2 flex items-center">
        <Button primary className="mr-2">
          <CheckIcon width={32} height={32} />
        </Button>
        <div>
          Sự hài lòng của nhân viên là ưu tiên hàng đầu và là nền tảng để mang lại sự hài lòng của
          khách hàng.
        </div>
      </div>
      <div className="my-2 flex items-center">
        <Button primary className="mr-2">
          <CheckIcon width={32} height={32} />
        </Button>
        <div>
          Không ngừng tập trung vào khách hàng thông qua sự am hiểu tường tận và quan tâm chu đáo.
        </div>
      </div>
      <div className="my-2 flex items-center">
        <Button primary className="mr-2">
          <CheckIcon width={32} height={32} />
        </Button>
        <div>
          Tinh thần trách nhiệm đối với những mục tiêu đã cam kết, bất kể những trở ngại và thử
          thách.
        </div>
      </div>
      <div className="my-2 flex items-center">
        <Button primary className="mr-2">
          <CheckIcon width={32} height={32} />
        </Button>
        <div>Không ngại đưa ra những cải tiến để nâng tầm hiệu quả của công việc.</div>
      </div>
      <h6 className="my-6">
        Mọi hồ sơ xin việc xin gửi về email:
        <Button text outline line className="ml-2">
          meomeo@gmail.com
        </Button>
      </h6>
    </div>
  );
};
