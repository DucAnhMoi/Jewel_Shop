const { setMessageErr, rulesValidate } = require('../validate');

// Register
export const validateRegister = (data, setMessage) => {
  let username = validateRegisterUsername(data, setMessage);
  let email = validateRegisterEmail(data, setMessage);
  let password = validateRegisterPassword(data, setMessage);
  let confirmPassword = validateRegisterConfirmPassword(data, setMessage);
  let term = validateRegisterTerm(data, setMessage);
  return username && email && password && confirmPassword && term;
};

// Username
export const validateRegisterUsername = (data, setMessage) => {
  const username = [
    rulesValidate.max(data.username, 6, 'Tên người dùng chỉ được tối đa 6 kí tự'),
    rulesValidate.min(data.username, 4, 'Tên người dùng phải có tối thiểu 4 kí tự'),
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

// Email
export const validateRegisterEmail = (data, setMessage) => {
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

// Password
export const validateRegisterPassword = (data, setMessage) => {
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

export const validateRegisterConfirmPassword = (data, setMessage) => {
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

export const validateRegisterTerm = (data, setMessage) => {
  if (data.term) {
    return true;
  } else {
    setMessageErr(['Bạn chưa đồng ý với điều khoản của chúng tôi'], 'term', setMessage);
    return false;
  }
};
