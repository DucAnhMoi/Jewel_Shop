// Import librarys
import React, { useState } from 'react';
import { Button } from 'src/components';
// Import components/assets/sections/....

export const ProductContent = () => {
  const [choose, setChoose] = useState(1);
  return (
    <div className="px-4 mt-[24px] pb-[24px]">
      <div className="flex justify-between">
        <Button
          text
          line
          onClick={() => setChoose(1)}
          className={choose === 1 ? 'text-active' : ''}
        >
          <h3>Mô tả</h3>
        </Button>
        <Button
          text
          line
          onClick={() => setChoose(2)}
          className={choose === 2 ? 'text-active' : ''}
        >
          <h3>Bảo hành và Hoàn trả</h3>
        </Button>
        <Button
          text
          line
          onClick={() => setChoose(3)}
          className={choose === 3 ? 'text-active' : ''}
        >
          <h3>Vận chuyển</h3>
        </Button>
      </div>
      {choose === 1 && (
        <div className="mt-[24px] shadow-xl p-4 border-[1px] border-solid">
          <h6 className="my-[12px]">Sản phẩm:</h6>
          <div>Bông tai Elean chuôi bạc 925 hình vuông sang chảnh</div>
          <h6 className="my-[12px]">Các điểm nổi bật:</h6>
          <div className="my-1">Nút cài sau chắc chắn, chống rơi</div>
          <div className="my-1">Kĩ thuật mạ đều màu, khó phai</div>
          <div className="my-1">Không bị đen hay gỉ set</div>
          <div className="my-1">Phù hợp mọi loại da</div>
        </div>
      )}
      {choose === 2 && (
        <div className="mt-[24px] shadow-xl p-4 border-[1px] border-solid">
          <h6 className="my-[12px]">Chính sách bảo hành:</h6>
          <div className="my-1">Làm sạch sản phẩm: Trọn đời.</div>
          <div className="my-1">Đánh bóng và xỉ mới: 05 lần.</div>
          <h6 className="my-[12px]">Phí bảo hành:</h6>
          <div className="my-1">Sửa độ rung với sản phẩm Landanse: 200,000Đ/1lần.</div>
          <div className="my-1">Làm mới sản phẩm: 50,000Đ/1lần.</div>
          <h6 className="my-[12px]">Lưu ý:</h6>
          <div className="my-1">
            Sản phẩm không còn nguyên vẹn hoặc mất hóa đơn, Jewelry Shop sẽ thu mua lại với 80% giá
            trị sản phẩm.
          </div>
          <div className="my-1">
            Các sản phẩm trang sức bạc, mạ vàng, vòng đá, dây da các loại, chuỗi ngọc trai: Jewelry
            Shop sẽ không thu mua lại.
          </div>
        </div>
      )}
      {choose === 3 && (
        <div className="mt-[24px] shadow-xl p-4 border-[1px] border-solid">
          <h6 className="my-[12px]">Chính sách vận chuyển:</h6>
          <div className="my-1">Nội thành Hà Nội: 2 ngày.</div>
          <div className="my-1">Các tỉnh khác: 3-5 ngày.</div>
          <h6 className="my-[12px]">Lưu ý:</h6>
          <div className="my-1">
            Với sản phẩm khuyến mãi từ 20% trở lên khách hàng phải chịu hoàn toàn phí giao hàng.
          </div>
        </div>
      )}
    </div>
  );
};
