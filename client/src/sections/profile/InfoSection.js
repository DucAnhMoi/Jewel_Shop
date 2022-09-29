// Import librarys
import Image from 'next/image';
import React, { useRef, useState } from 'react';
// Import components/assets/sections/....
import Avatar from 'public/assets/avatar.jpg';
import { Button } from 'src/components';
import { CameraIcon, PenToSquareIcon } from 'src/components/icons/Icons';
import { validateInfo } from 'src/utils/schemaValidate/schemaInfo';

export const InfoSection = () => {
  // REF
  const refUsername = useRef();
  const refGender = useRef();
  const refAge = useRef();
  const refAddress = useRef();
  // Data
  const [data, setData] = useState({
    username: 'Ducanh',
    gender: 'Nam',
    age: '18',
    city: 'Hai Phong',
    district: 'An DUong',
    ward: 'Nam Son',
    specific: 'Nha so 6',
  });
  // Message error
  const [message, setMessage] = useState({
    username: '',
    age: '',
    city: '',
    district: '',
    ward: '',
    specific: '',
  });

  // Handle Validate
  const handleSubmit = (e) => {
    if (validateInfo(data, setMessage)) {
      console.log(data);
    }
    // Push data
  };

  // Handle Event
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="flex mt-[16px] molet:flex-col">
      <div className="w-1/2 mx-[16px] molet:mx-0 molet:w-full">
        <h5>Thông tin cá nhân</h5>
        <div className="flex justify-center bg-gray-200 dark:bg-gray-600 p-[16px] my-[16px] relative">
          <Image src={Avatar} width={128} height={128} />
          <Button secondary className="absolute top-[10%] left-[5%] p-[8px]">
            <CameraIcon width={24} height={24} />
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <h6>
            Tên người dùng:{' '}
            <input
              value={data.username}
              ref={refUsername}
              onChange={handleChange}
              name="username"
              className="dark:text-black px-2 molet:w-[140px]"
            />
            <p>{message.username}</p>
          </h6>
          <Button secondary className="p-[8px]" onClick={() => refUsername.current.focus()}>
            <PenToSquareIcon width={24} height={24} />
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <h6>
            Giới tính:
            <select
              ref={refGender}
              value={data.gender}
              onChange={handleChange}
              name="gender"
              className="dark:text-black px-2"
            >
              <option>Nam</option>
              <option>Nữ</option>
            </select>
          </h6>
          <Button secondary className="p-[8px]" onClick={() => refGender.current.focus()}>
            <PenToSquareIcon width={24} height={24} />
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <h6>
            Tuổi:{' '}
            <input
              type="number"
              ref={refAge}
              value={data.age}
              onChange={handleChange}
              name="age"
              min="1"
              className="dark:text-black px-2"
            />
            <p>{message.age}</p>
          </h6>
          <Button secondary className="p-[8px]" onClick={() => refAge.current.focus()}>
            <PenToSquareIcon width={24} height={24} />
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h6>Địa chỉ:</h6>
            <h6>
              <div className="ml-8 my-1">
                {'Thành phố: '}
                <input
                  ref={refAddress}
                  value={data.city}
                  onChange={handleChange}
                  name="city"
                  className="dark:text-black px-2 molet:w-[140px]"
                />
              </div>
              <div className="ml-8 my-1">
                {'Quận/huyện: '}
                <input
                  value={data.district}
                  onChange={handleChange}
                  name="district"
                  className="dark:text-black px-2 molet:w-[140px]"
                />
              </div>
              <div className="ml-8 my-1">
                {'Phường/xã: '}
                <input
                  value={data.ward}
                  onChange={handleChange}
                  name="ward"
                  className="dark:text-black px-2 molet:w-[140px]"
                />
              </div>
              <div className="ml-8 my-1">
                {'Địa chỉ cụ thể: '}
                <input
                  value={data.specific}
                  onChange={handleChange}
                  name="specific"
                  className="dark:text-black px-2 molet:w-[140px]"
                />
              </div>
              {message.city === '' &&
              message.district === '' &&
              message.ward === '' &&
              message.specific === '' ? (
                <></>
              ) : (
                <p>Vui lòng nhập trường còn thiếu</p>
              )}
            </h6>
          </div>
          <Button secondary className="p-[8px]" onClick={() => refAddress.current.focus()}>
            <PenToSquareIcon width={24} height={24} />
          </Button>
        </div>
        <div>
          <Button primary className="py-[8px] px-[24px] mt-[24px]" onClick={handleSubmit}>
            Cập nhật
          </Button>
        </div>
      </div>
      <div className="w-1/2 mx-[16px] molet:w-full molet:mx-0 molet:mt-[16px]">
        <h5>Bảo mật</h5>
        <div className="p-[16px]">
          <div className="flex items-center justify-between">
            <h6>Email: tducanh263@gmail.com</h6>
            <Button secondary className="p-[8px]" onClick={() => refAge.current.focus()}>
              <PenToSquareIcon width={24} height={24} />
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <h6>Mật khẩu: *********************</h6>
            <Button secondary className="p-[8px]" onClick={() => refAge.current.focus()}>
              <PenToSquareIcon width={24} height={24} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
