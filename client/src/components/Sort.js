// Import librarys
// Import components/assets/sections/....

export const Sort = () => {
  return (
    <div className="flex items-center">
      <h6 className="mr-[12px]">Sắp xếp theo:</h6>
      <select className="bg-bgLightMain dark:bg-bgDarkMain">
        <option>A-Z</option>
        <option>Giá tăng dần</option>
        <option>Sản phẩm mới</option>
      </select>
    </div>
  );
};
