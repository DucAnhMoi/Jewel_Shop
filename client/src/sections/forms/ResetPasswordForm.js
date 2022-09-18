// Import library
import React, { useState } from 'react';
// Import components/assets/sections/....
import { Button, FormProvider } from 'src/components';
import { TextField } from 'src/components/fields';
import { validateRegisterPassword } from 'src/utils/schemaValidate/schemaRegister';
import {
  validateResetPassword,
  validateResetPasswordNewConfirmPassword,
  validateResetPasswordNewPassword,
  validateResetPasswordPassword,
} from 'src/utils/schemaValidate/schemaResetPassword';

export const ResetPasswordForm = () => {
  // Data
  const [data, setData] = useState({
    password: '',
    newPassword: '',
    newConfirmPassword: '',
  });
  // Message error
  const [message, setMessage] = useState({
    password: '',
    newPassword: '',
    newConfirmPassword: '',
  });

  // Handle Validate
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateResetPassword(data, setMessage)) {
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
      <h5>Đăng ký tài khoản</h5>
      {/* Main form */}
      <div className="pt-[8px] pb-[32px]">
        {/* Password */}
        <TextField
          // UI
          styleBox="mt-[24px]"
          fullWidth
          label="Password"
          placeholder="Nhập mật khẩu hiện tại"
          name="password"
          type="password"
          // Logic
          message={message.password}
          value={data.password}
          active={message.password || data.password === '' ? false : true}
          // Event
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={() => validateResetPasswordPassword(data, setMessage)}
        />
        {/* Password */}
        <TextField
          // UI
          styleBox="mt-[24px]"
          fullWidth
          label="New Password"
          placeholder="Nhập mật khẩu mới"
          name="newPassword"
          type="password"
          // Logic
          message={message.newPassword}
          value={data.newPassword}
          active={message.newPassword || data.newPassword === '' ? false : true}
          // Event
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={() => validateResetPasswordNewPassword(data, setMessage)}
        />
        {/* Confirm password */}
        <TextField
          // UI
          styleBox="mt-[24px]"
          fullWidth
          label="New Confirm Password"
          placeholder="Nhập lại mật khẩu mới"
          name="newConfirmPassword"
          type="password"
          // Logic
          message={message.newConfirmPassword}
          value={data.newConfirmPassword}
          active={
            data.newPassword === data.newConfirmPassword && data.newPassword !== '' ? true : false
          }
          // Event
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={() => validateResetPasswordNewConfirmPassword(data, setMessage)}
        />
      </div>
      {/* Button */}
      <Button primary className="px-[46px] py-[8px] w-full">
        XÁC NHẬN
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
      {/* Switch to register */}
      <span className="block">
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
