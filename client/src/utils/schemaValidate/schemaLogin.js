const { setMessageErr, rulesValidate } = require('../validate');

// Register
export const validateLogin = (data, setMessage) => {
  let username = validateLoginUsername(data, setMessage);
  let password = validateLoginPassword(data, setMessage);
  return username && password;
};

// Username
export const validateLoginUsername = (data, setMessage) => {
  const username = [
    rulesValidate.max(data.username, 16, 'Tên người dùng chỉ được tối đa 16 kí tự'),
    rulesValidate.min(data.username, 6, 'Tên người dùng phải có tối thiểu 6 kí tự'),
    rulesValidate.isRequired(data.username, 'Vui lòng nhập tên người dùng'),
  ];
  // Set err
  setMessageErr(username, 'username', setMessage);
  // Validate
  for (let i = 0; i < username.length; i++) {
    if (username[i] !== true) {
      return false;
    }
  }
  return true;
};

// Password
export const validateLoginPassword = (data, setMessage) => {
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
