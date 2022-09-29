// Import library
import React, { useState } from 'react';
// Import components/assets/sections/....
import { Button, FormProvider } from 'src/components';
import { TextField } from 'src/components/fields';
import {
  validateLogin,
  validateLoginPassword,
  validateLoginUsername,
} from 'src/utils/schemaValidate/schemaLogin';
import { LoginOtherSection } from 'src/sections/auth';

export const LoginForm = () => {
  // Data
  const [data, setData] = useState({
    username: '',
    password: '',
  });
  // Message error
  const [message, setMessage] = useState({
    username: '',
    password: '',
  });

  // Handle Validate
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateLogin(data, setMessage)) {
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

  // UI
  return (
    <FormProvider className="mt-[36px]" onSubmit={handleSubmit}>
      {/* Headline */}
      <h5>Đăng nhập</h5>
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
          onBlur={() => validateLoginUsername(data, setMessage)}
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
          onBlur={() => validateLoginPassword(data, setMessage)}
        />
        <Button to="/auth/forgotpassword" text line className="inline-block mt-[16px]">
          Quên mật khẩu?
        </Button>
      </div>

      {/* Login Button */}
      <Button primary className="px-[46px] py-[8px] w-full">
        ĐĂNG NHẬP
      </Button>

      <LoginOtherSection />

      {/* Switch to register */}
      <span className="mt-[16px] block">
        Bạn chưa có tài khoản?{' '}
        <Button
          to="/auth/register"
          text
          line
          className="inline-block text-btn-text"
          classHover="hover:text-active"
        >
          ĐĂNG KÝ
        </Button>
      </span>
    </FormProvider>
  );
};
