const { setMessageErr, rulesValidate } = require('../validate');

// ResetPassword
export const validateResetPassword = (data, setMessage) => {
  let password = validateResetPasswordPassword(data, setMessage);
  let newPassword = validateResetPasswordNewPassword(data, setMessage);
  let newConfirmPassword = validateResetPasswordNewConfirmPassword(data, setMessage);
  return password && newPassword && newConfirmPassword;
};

// Password
export const validateResetPasswordPassword = (data, setMessage) => {
  const password = [
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

// New Password
export const validateResetPasswordNewPassword = (data, setMessage) => {
  const newPassword = [
    rulesValidate.upperCaseAndNumber(
      data.newPassword,
      'Mật khẩu phải có ít nhất 1 chữ cái viết hoa và 1 số',
    ),
    rulesValidate.min(data.newPassword, 8, 'Mật khẩu phải có tối thiểu 8 kí tự'),
    rulesValidate.isRequired(data.newPassword, 'Vui lòng nhập mật khẩu'),
  ];
  // Set err
  setMessageErr(newPassword, 'newPassword', setMessage);
  // Validate
  for (let i = 0; i < newPassword.length; i++) {
    if (newPassword[i] !== true) {
      return false;
    }
  }
  return true;
};

// New Confirm Password
export const validateResetPasswordNewConfirmPassword = (data, setMessage) => {
  const newConfirmPassword = [
    rulesValidate.confirmPassword(
      data.newPassword,
      data.newConfirmPassword,
      'Mật khẩu không trùng khớp',
    ),
    rulesValidate.isRequired(data.newConfirmPassword, 'Vui lòng xác nhận mật khẩu'),
  ];
  // Set err
  setMessageErr(newConfirmPassword, 'newConfirmPassword', setMessage);
  // Validate
  for (let i = 0; i < newConfirmPassword.length; i++) {
    if (newConfirmPassword[i] !== true) {
      return false;
    }
  }
  return true;
};
