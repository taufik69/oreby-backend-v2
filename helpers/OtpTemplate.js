exports.OtpTemplate = (opt) => {
  return `
    <body>
      <h1>This is OTP </h1>
      <p>This otp is  ${opt} expire in 10 minutes.</p>
    <button> Click Here <button/>
    </body>
   
    `;
};
