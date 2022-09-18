// Import library
import React, { useState } from 'react';
// Import components/assets/sections/....
import { Button, FormProvider } from 'src/components';
import { CheckBox, TextField } from 'src/components/fields';
import {
  validateRegister,
  validateRegisterConfirmPassword,
  validateRegisterEmail,
  validateRegisterPassword,
  validateRegisterUsername,
} from 'src/utils/schemaValidate/schemaRegister';

export const RegisterForm = () => {
  // Data
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    getEmail: false,
    term: false,
  });
  // Message error
  const [message, setMessage] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    term: '',
  });

  // Handle Validate
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateRegister(data, setMessage)) {
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
  const handleFocus = (e) =>
    setMessage({
      ...message,
      [e.target.name]: '',
    });
  const handleClick = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.checked,
    });
  };

  // UI
  return (
    <FormProvider className="mt-[36px]" onSubmit={handleSubmit}>
      {/* Headline */}
      <h5>Đăng ký tài khoản</h5>
      {/* Main form */}
      <div className="pt-[8px] pb-[32px]">
        {/* Username */}
        <TextField
          // UI
          styleBox="mt-[24px]"
          fullWidth
          label="Username"
          placeholder="Nhập tên người dùng"
          name="username"
          // Logic
          message={message.username}
          value={data.username}
          active={message.username || data.username === '' ? false : true}
          // Event
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={() => validateRegisterUsername(data, setMessage)}
        />
        {/* Email */}
        <TextField
          // UI
          styleBox="mt-[24px]"
          fullWidth
          label="Email"
          name="email"
          placeholder="Nhập email"
          // Logic
          message={message.email}
          value={data.email}
          active={message.email || data.email === '' ? false : true}
          // Event
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={() => validateRegisterEmail(data, setMessage)}
        />
        {/* Password */}
        <TextField
          // UI
          styleBox="mt-[24px]"
          fullWidth
          label="Password"
          placeholder="Nhập mật khẩu"
          name="password"
          type="password"
          // Logic
          message={message.password}
          value={data.password}
          active={message.password || data.password === '' ? false : true}
          // Event
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={() => validateRegisterPassword(data, setMessage)}
        />
        {/* Confirm password */}
        <TextField
          // UI
          styleBox="mt-[24px]"
          fullWidth
          label="Confirm Password"
          placeholder="Nhập lại mật khẩu"
          name="confirmPassword"
          type="password"
          // Logic
          message={message.confirmPassword}
          value={data.confirmPassword}
          active={data.password === data.confirmPassword && data.password !== '' ? true : false}
          // Event
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={() => validateRegisterConfirmPassword(data, setMessage)}
        />

        {/* Get info */}
        <div className="flex items-center mt-[16px]">
          <CheckBox
            size="medium"
            style={{ padding: '0 12px 0 0', width: '32px' }}
            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
            name="getEmail"
            // Logic
            onClick={handleClick}
            checked={data.getEmail}
          />
          <h6 className="font-medium">Nhận thông tin khuyến mãi qua email</h6>
        </div>

        {/* Agree to the terms */}
        <div className="flex items-start mt-[16px]">
          <CheckBox
            size="medium"
            style={{ padding: '0 12px 0 0', width: '32px' }}
            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
            name="term"
            // Logic
            onClick={(e) => {
              handleClick(e);
              if (!data.term) {
                setMessage((prev) => ({
                  ...prev,
                  term: '',
                }));
              }
            }}
            checked={data.term}
          />
          <h6 className="font-medium">
            Tôi đồng ý với các{' '}
            <Button
              to="/dieukhoan"
              classHover="hover:text-active"
              text
              line
              className="inline-block text-btn-text"
            >
              điều khoản chính sách
            </Button>{' '}
            của Jewelry Shop
          </h6>
        </div>
        <span className={`text-red-600`}>{message.term}</span>
      </div>

      {/* Register Button */}
      <Button primary className="px-[46px] py-[8px] w-full">
        ĐĂNG KÝ
      </Button>

      {/* Switch to login */}
      <span className="mt-[16px] block">
        Bạn đã có tài khoản?{' '}
        <Button
          to="/auth/login"
          text
          line
          className="inline-block text-btn-text"
          classHover="hover:text-active"
        >
          ĐĂNG NHẬP
        </Button>
      </span>
    </FormProvider>
  );
};
