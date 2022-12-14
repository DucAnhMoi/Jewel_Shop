// Import library
import React, { useState } from 'react';
// Import components/assets/sections/....
import { Button, FormProvider } from 'src/components';
import { LoginOtherSection } from 'src/sections/auth';
import { TextField } from 'src/components/fields';
import {
  validateForgotPassword,
  validateForgotPasswordEmail,
  validateForgotPasswordOtp,
  validateForgotPasswordPassword,
  validateForgotPasswordConfirmPassword,
} from 'src/utils/schemaValidate/chemaForgotPassword';
import { LeftArrowIcon } from 'src/components/icons/Icons';

export const ForgotPasswordForm = () => {
  const [type, setType] = useState('checkEmail');
  // checkEmail, getOtp, reset
  // Data
  const [data, setData] = useState({
    email: '',
    otp: '',
    password: '',
    confirmPassword: '',
  });
  // Message error
  const [message, setMessage] = useState({
    email: '',
    otp: '',
    password: '',
    confirmPassword: '',
  });

  // Handle Validate and logic push data
  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === 'checkEmail' && validateForgotPasswordEmail(data, setMessage)) {
      console.log(data);
      setType('getOtp');
    } else if (type === 'getOtp' && validateForgotPasswordOtp(data, setMessage)) {
      console.log(data);
      setType('reset');
    } else if (type === 'reset' && validateForgotPassword(data, setMessage)) {
      console.log(data);
    }
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
      <div className="flex items-center">
        {type === 'getOtp' ? (
          <Button
            text
            className="pr-[8px]"
            leftIcon={<LeftArrowIcon width={16} height={16} />}
            onClick={() => setType('checkEmail')}
          ></Button>
        ) : (
          <></>
        )}
        <h5>?????t l???i m???t kh???u</h5>
      </div>

      {/* Form */}

      {/* Check Email */}
      {type === 'checkEmail' ? (
        <div className="pt-[8px] pb-[32px]">
          {/* Username */}
          <TextField
            // UI
            styleBox="mt-[24px]"
            fullWidth
            label="Email"
            placeholder="Nh???p email c???a b???n"
            name="email"
            // Logic
            message={message.email}
            value={data.email}
            active={message.email || data.email === '' ? false : true}
            // Event
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={() => validateForgotPasswordEmail(data, setMessage)}
          />
          {/* Button */}
          <Button primary className="px-[46px] py-[8px] mt-[32px] w-full">
            TI???P THEO
          </Button>
        </div>
      ) : (
        <></>
      )}

      {/* Get OTP */}
      {type === 'getOtp' ? (
        <>
          <div className="pb-[32px]">
            {/* Username */}
            <TextField
              // UI
              styleBox="mt-[24px]"
              fullWidth
              label="OTP"
              placeholder="Nh???p m?? otp c???a b???n"
              name="otp"
              // Logic
              message={message.otp}
              value={data.otp}
              active={message.otp || data.otp === '' ? false : true}
              // Event
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={() => validateForgotPasswordOtp(data, setMessage)}
            />
          </div>

          {/* Button */}
          <Button primary className="px-[46px] py-[8px] w-full">
            X??C NH???N
          </Button>
        </>
      ) : (
        <></>
      )}

      {/* Reset */}
      {type === 'reset' ? (
        <>
          <TextField
            // UI
            styleBox="mt-[24px]"
            fullWidth
            label="Password"
            placeholder="Nh???p m???t kh???u"
            name="password"
            type="password"
            // Logic
            message={message.password}
            value={data.password}
            active={message.password || data.password === '' ? false : true}
            // Event
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={() => validateForgotPasswordPassword(data, setMessage)}
          />
          <TextField
            // UI
            styleBox="mt-[24px]"
            fullWidth
            label="Confirm Password"
            placeholder="Nh???p l???i m???t kh???u"
            name="confirmPassword"
            type="password"
            // Logic
            message={message.confirmPassword}
            value={data.confirmPassword}
            active={data.password === data.confirmPassword && data.password !== '' ? true : false}
            // Event
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={() => validateForgotPasswordConfirmPassword(data, setMessage)}
          />
          {/* Button */}
          <Button primary className="px-[46px] py-[8px] mt-[32px] w-full">
            X??C NH???N
          </Button>
        </>
      ) : (
        <></>
      )}

      <LoginOtherSection />

      {/* Switch to login */}
      <span className="mt-[16px] block">
        B???n ???? c?? t??i kho???n?{' '}
        <Button
          to="/auth/login"
          text
          line
          className="inline-block text-btn-text"
          classHover="hover:text-active"
        >
          ????NG NH???P
        </Button>
      </span>
      {/* Switch to register */}
      <span className="block">
        B???n ch??a c?? t??i kho???n?{' '}
        <Button
          to="/auth/register"
          text
          line
          className="inline-block text-btn-text"
          classHover="hover:text-active"
        >
          ????NG K??
        </Button>
      </span>
    </FormProvider>
  );
};
