const { setMessageErr, rulesValidate } = require('../validate');

// ForgotPassword
export const validateForgotPassword = (data, setMessage) => {
  let password = validateForgotPasswordPassword(data, setMessage);
  let confirmPassword = validateForgotPasswordConfirmPassword(data, setMessage);
  return password && confirmPassword;
};

// Email
export const validateForgotPasswordEmail = (data, setMessage) => {
  const email = [
    rulesValidate.isEmail(data.email, 'Email không hợp lệ'),
    rulesValidate.isRequired(data.email, 'Vui lòng nhập email của bạn'),
  ];
  // Set err
  setMessageErr(email, 'email', setMessage);
  // Validate
  for (let i = 0; i < email.length; i++) {
    if (email[i] !== true) {
      return false;
    }
  }
  return true;
};

// Otp
export const validateForgotPasswordOtp = (data, setMessage) => {
  const otp = [rulesValidate.isRequired(data.otp, 'Vui lòng nhập mã OTP của bạn')];
  // Set err
  setMessageErr(otp, 'otp', setMessage);
  // Validate
  for (let i = 0; i < otp.length; i++) {
    if (otp[i] !== true) {
      return false;
    }
  }
  return true;
};

// Password
export const validateForgotPasswordPassword = (data, setMessage) => {
  const password = [
    rulesValidate.upperCaseAndNumber(
      data.password,
      'Mật khẩu phải có ít nhất 1 chữ cái viết hoa và 1 số',
    ),
    rulesValidate.min(data.password, 8, 'Mật khẩu phải có tối thiểu 8 kí tự'),
    rulesValidate.isRequired(data.password, 'Vui lòng nhập mật khẩu'),
  ];
  // Set err
  setMessageErr(password, 'password', setMessage);
  // Validate
  for (let i = 0; i < password.length; i++) {
    if (password[i] !== true) {
      return false;
    }
  }
  return true;
};

export const validateForgotPasswordConfirmPassword = (data, setMessage) => {
  const confirmPassword = [
    rulesValidate.confirmPassword(data.password, data.confirmPassword, 'Mật khẩu không trùng khớp'),
    rulesValidate.isRequired(data.password, 'Vui lòng xác nhận mật khẩu'),
  ];
  // Set err
  setMessageErr(confirmPassword, 'confirmPassword', setMessage);
  // Validate
  for (let i = 0; i < confirmPassword.length; i++) {
    if (confirmPassword[i] !== true) {
      return false;
    }
  }
  return true;
};
