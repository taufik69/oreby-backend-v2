exports.userNameValidate = (fullName , min , max) => {
    if (fullName.length <= min || fullName.length >= max) {
        return false;
      } else {
        return true;
      }
}