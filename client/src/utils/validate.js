export const rulesValidate = {
  isRequired: (text, errMessage) => {
    if (text.trim() === '') {
      return errMessage;
    }
    return true;
  },
  isEmail: (email, errMessage) => {
    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) return true;
    return errMessage;
  },
  min: (text, valueMin, errMessage) => {
    if (text.trim().length < valueMin) {
      return errMessage;
    }
    return true;
  },
  max: (text, valueMax, errMessage) => {
    if (text.trim().length > valueMax) {
      return errMessage;
    }
    return true;
  },
  upperCaseAndNumber: (text, errMessage) => {
    let re = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{6,}$/;
    if (re.test(text)) return true;
    return errMessage;
  },
  confirmPassword: (password, confirmPassword, errMessage) => {
    if (password === confirmPassword) {
      return true;
    }
    return errMessage;
  },
};

export const setMessageErr = (array, type, setMessage) => {
  for (let i = 0; i < array.length; ++i) {
    if (array[i] !== true) {
      setMessage((prev) => ({
        ...prev,
        [type]: array[i],
      }));
    }
  }
};
