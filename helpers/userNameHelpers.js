exports.userNameValidate = (fullName, min = 4, max = 10) => {
  if (fullName.length <= min || fullName.length >= max) {
    return false;
  } else {
    return true;
  }
};
