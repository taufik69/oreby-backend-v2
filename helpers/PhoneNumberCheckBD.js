exports.phoneNumberValidatorBD = (phoneNumber) => {
  const bangladeshPhoneNumberRegex = /^(\+?88)?01[3-9]\d{8}$/;
  return bangladeshPhoneNumberRegex.test(phoneNumber);
};
