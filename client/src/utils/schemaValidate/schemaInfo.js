const { setMessageErr, rulesValidate } = require('../validate');

// Info
export const validateInfo = (data, setMessage) => {
  let username = validateInfoUsername(data, setMessage);
  let age = validateInfoAge(data, setMessage);
  let city = validateInfoCity(data, setMessage);
  let district = validateInfoDistrict(data, setMessage);
  let ward = validateInfoWard(data, setMessage);
  let specific = validateInfoSpecific(data, setMessage);
  return username && age && city && district && ward && specific;
};

// Username
export const validateInfoUsername = (data, setMessage) => {
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

// Age
export const validateInfoAge = (data, setMessage) => {
  const age = [rulesValidate.isRequired(data.age, 'Vui lòng nhập tuổi của bạn')];
  // Set err
  setMessageErr(age, 'age', setMessage);
  // Validate
  for (let i = 0; i < age.length; i++) {
    if (age[i] !== true) {
      return false;
    }
  }
  return true;
};

// Age
export const validateInfoCity = (data, setMessage) => {
  const city = [rulesValidate.isRequired(data.city, 'Vui lòng nhập tỉnh/thànhphố của bạn')];
  // Set err
  setMessageErr(city, 'city', setMessage);
  // Validate
  for (let i = 0; i < city.length; i++) {
    if (city[i] !== true) {
      return false;
    }
  }
  return true;
};

// District
export const validateInfoDistrict = (data, setMessage) => {
  const district = [rulesValidate.isRequired(data.district, 'Vui lòng nhập quận/huyện của bạn')];
  // Set err
  setMessageErr(district, 'district', setMessage);
  // Validate
  for (let i = 0; i < district.length; i++) {
    if (district[i] !== true) {
      return false;
    }
  }
  return true;
};

// Ward
export const validateInfoWard = (data, setMessage) => {
  const ward = [rulesValidate.isRequired(data.ward, 'Vui lòng nhập xã/phường của bạn')];
  // Set err
  setMessageErr(ward, 'ward', setMessage);
  // Validate
  for (let i = 0; i < ward.length; i++) {
    if (ward[i] !== true) {
      return false;
    }
  }
  return true;
};

// Specific
export const validateInfoSpecific = (data, setMessage) => {
  const specific = [
    rulesValidate.isRequired(data.specific, 'Vui lòng nhập địa chỉ cụ thể của bạn'),
  ];
  // Set err
  setMessageErr(specific, 'specific', setMessage);
  // Validate
  for (let i = 0; i < specific.length; i++) {
    if (specific[i] !== true) {
      return false;
    }
  }
  return true;
};
